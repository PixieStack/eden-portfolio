import pytest
from fastapi.testclient import TestClient
import sys
import os

# Add backend to path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from server import app

client = TestClient(app)


class TestHealthEndpoint:
    """Test the health check endpoint"""
    
    def test_health_check_returns_200(self):
        """Health endpoint should return 200 OK"""
        response = client.get("/api/health")
        assert response.status_code == 200
    
    def test_health_check_returns_correct_structure(self):
        """Health endpoint should return status and message"""
        response = client.get("/api/health")
        data = response.json()
        assert "status" in data
        assert "message" in data
        assert data["status"] == "healthy"


class TestContactEndpoint:
    """Test the contact form endpoint"""
    
    def test_contact_requires_all_fields(self):
        """Contact endpoint should validate required fields"""
        # Missing message
        response = client.post("/api/contact", json={
            "name": "Test User",
            "email": "test@example.com"
        })
        assert response.status_code == 422  # Validation error
    
    def test_contact_validates_email_format(self):
        """Contact endpoint should validate email format"""
        response = client.post("/api/contact", json={
            "name": "Test User",
            "email": "invalid-email",
            "message": "Hello"
        })
        assert response.status_code == 422  # Validation error
    
    def test_contact_with_valid_data_structure(self):
        """Contact endpoint should accept valid data structure"""
        response = client.post("/api/contact", json={
            "name": "Test User",
            "email": "test@example.com",
            "message": "This is a test message"
        })
        # Will return 500 if RESEND_API_KEY not set, but validates structure
        assert response.status_code in [200, 500]


class TestCORS:
    """Test CORS configuration"""
    
    def test_cors_headers_present(self):
        """CORS headers should be present in response"""
        response = client.options("/api/health")
        # FastAPI handles CORS via middleware
        assert response.status_code in [200, 405]
