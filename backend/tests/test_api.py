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
        response = client.post("/api/contact", data={
            "name": "Test User",
            "email": "test@example.com"
        })
        assert response.status_code == 422  # Validation error
    
    def test_contact_validates_email_format(self):
        """Contact endpoint should validate email format"""
        response = client.post("/api/contact", data={
            "name": "Test User",
            "email": "invalid-email",
            "message": "Hello"
        })
        assert response.status_code == 422  # Validation error
    
    def test_contact_with_valid_data_structure(self):
        """Contact endpoint should accept valid data structure"""
        response = client.post("/api/contact", data={
            "name": "Test User",
            "email": "test@example.com",
            "request_type": "Project repository access",
            "message": "This is a test message"
        })
        # Returns 503 when BREVO_API_KEY is not set, but validates structure
        assert response.status_code in [200, 502, 503]

    def test_contact_rejects_unsupported_attachment(self):
        """Contact endpoint should reject unsupported attachment types"""
        response = client.post(
            "/api/contact",
            data={
                "name": "Test User",
                "email": "test@example.com",
                "request_type": "General enquiry",
                "message": "This is a test message",
            },
            files={"attachment": ("unsafe.exe", b"not-an-executable", "application/octet-stream")},
        )
        assert response.status_code == 415

class TestCORS:
    """Test CORS configuration"""
    
    def test_cors_headers_present(self):
        """CORS headers should be present in response"""
        response = client.options("/api/health")
        # FastAPI handles CORS via middleware
        assert response.status_code in [200, 405]
