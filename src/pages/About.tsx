import { Link } from "react-router-dom";
import { ChevronRight, Heart } from "lucide-react";
import GallerySection from "../components/GallerySection";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
        <div className="section text-center">
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20">
            <Heart className="text-primary" size={18} />
            <span className="text-primary font-medium text-sm">
              My Full Story
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.2] tracking-tight mb-6">
            Hey, I am <span className="text-gradient">Thembinkosi Eden Thwala</span>
          </h1>
          <p className="text-2xl md:text-3xl text-muted-light font-medium">
            But most people call me <span className="text-white">Eden.</span>
          </p>
          <p className="mt-8 max-w-3xl mx-auto text-lg text-muted leading-relaxed">
            I am a Junior Full-Stack Developer and Data Analyst from Johannesburg, South Africa. I build with purpose, I learn with intention, and I genuinely love what I do. Not everyone can say that. I can, and I have the story to prove it.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section space-y-24">
        {/* Section 1: Windows XP */}
        <div className="card p-8 md:p-12 border border-white/5 hover:border-primary/30 transition-all duration-300">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            It Started With a <span className="text-gradient">Windows XP</span> Computer
          </h2>
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              My love for technology did not start in a classroom. It started at home, watching my older sister run a computer shop where she would buy parts and assemble computers completely from scratch, then sell them. She was building machines with her hands and I was completely fascinated.
            </p>
            <p>
              When I passed Grade 3 and moved into Grade 4, she made me my very first computer. It ran Windows XP and I thought it was the most incredible thing I had ever seen. From that moment something clicked. I did not have the words for it yet. I did not know what software development was or what a career in IT looked like. I just knew, with absolute certainty, that whatever I ended up doing with my life had to involve computers.
            </p>
            <p className="text-primary font-semibold text-xl">
              That little girl with her Windows XP computer never went away. She just learned how to code.
            </p>
          </div>
        </div>

        {/* Section 2: Finding My Path */}
        <div className="card p-8 md:p-12 border border-white/5 hover:border-primary/30 transition-all duration-300">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Finding</span> My Path
          </h2>
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              When I started my Higher Certificate in IT Support Services at Nelson Mandela University in 2020, I was excited but I quickly discovered that not everything in IT is created equal, at least not for me. Most of the modules felt a bit dry if I am being honest.
            </p>
            <p>
              But then two things happened that reminded me why I was there.
            </p>
            <p className="ml-4 border-l-4 border-primary pl-4">
              <strong>The first</strong> was the A+ module where we were supposed to physically assemble computers from components, which felt like a full circle moment back to watching my sister in her shop. <strong>The second</strong> was Packet Tracer, which introduced me to how networks actually work and I found that genuinely interesting.
            </p>
            <p>
              And then 2020 had other plans. COVID hit during my very first year at university and suddenly the hands on assembling we were supposed to do was gone. No physical labs, no building machines. Just screens and online classes.
            </p>
            <p>
              But there was one more thing that year that changed everything. One module introduced basic coding, mostly pseudocode, but it was enough. Something about writing logic, structuring a solution, telling a machine what to do, lit me up in a way nothing else in that certificate had. I graduated Cum Laude and immediately knew what I was doing next.
            </p>
            <p className="text-primary font-semibold">
              In 2021, I registered for the Diploma in Information Technology, Software Development and I never looked back.
            </p>
          </div>
        </div>

        {/* Section 3: Cum Laude Chapter */}
        <div className="card p-8 md:p-12 border border-white/5 hover:border-primary/30 transition-all duration-300">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            The <span className="text-gradient-purple">Cum Laude</span> Chapter
          </h2>
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p className="text-xl font-semibold text-white">
              I was the only woman in my Diploma in Information Technology class of 2023 at Nelson Mandela University to graduate Cum Laude.
            </p>
            <p>
              I do not say that to boast. I say it because it represents something real. Every late night debugging session, every assignment I refused to submit without fully understanding it, every moment I chose to keep going when the easier option was to just get it done and move on. It also represents what it means to walk into spaces that were not necessarily built with you in mind and decide that you belong there anyway.
            </p>
            <p>
              I graduated Cum Laude in my Higher Certificate too. Two degrees, two distinctions, one consistent message to myself: <strong>do not do things halfway.</strong>
            </p>
          </div>
        </div>

        {/* Section 4: Where I Am Now */}
        <div className="card p-8 md:p-12 border border-white/5 hover:border-primary/30 transition-all duration-300">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Where I Am <span className="text-gradient">Now</span>
          </h2>
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              After my diploma I went into the working world, building full stack applications professionally and through personal portfolio projects. I have worked with teams following Agile methodologies, integrated cloud services, built backends and frontends, and gotten my hands dirty with real production code.
            </p>
            <p>
              Most recently something new caught my attention. I completed the ServiceNow Micro-Certification, Welcome to ServiceNow, and it opened a door I did not know was there. The platform fascinated me and I immediately started pursuing the Associate System Administrator certification through ServiceNow University. I am on a path now and I am genuinely excited about where it leads.
            </p>
            <p>
              I also hold certifications in Databricks Data Engineer Professional, Databricks Data Analyst Associate, Cisco networking and cybersecurity. I do not collect certifications for the sake of it. <strong>Each one marks a real chapter of growth.</strong>
            </p>
          </div>
        </div>

        {/* Section 5: Who I Am Outside Work */}
        <div className="card p-8 md:p-12 border border-white/5 hover:border-primary/30 transition-all duration-300">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Who I Am <span className="text-gradient">Outside</span> of Work
          </h2>
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p className="text-white font-semibold">This is the part most portfolios skip. I think it is actually the most important part.</p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="space-y-4">
                <h3 className="text-primary font-semibold text-xl">Reader & Wanderer</h3>
                <p>
                  I am a reader. I recently started The Alchemist by Paulo Coelho and I am already the kind of person who stops mid chapter just to sit with a thought. Give me a good novel, a blanket and a spot by the lake and I am completely happy.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-primary font-semibold text-xl">Adventure Seeker</h3>
                <p>
                  I love being outdoors and doing things that push me. Hiking, paintball shooting, Ninja Warrior courses, exploring new places, these are the activities that reset my brain and remind me what it feels like to tackle a challenge with your whole self.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-primary font-semibold text-xl">Creative Soul</h3>
                <p>
                  On the creative side I enjoy sip and paint sessions, which I find calming and surprisingly freeing. There is no right answer, no error message, just colour and intention.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-primary font-semibold text-xl">Storyteller</h3>
                <p>
                  I am a binge watcher and a movie person. I appreciate good storytelling in any format, whether it is a ten episode series I finish in a weekend or a film that stays with me for days.
                </p>
              </div>
            </div>
            <p className="mt-8">
              And I love food. Cooking new recipes, trying different cuisines, exploring restaurants I have never been to before. There is something about the process of cooking that feels a lot like writing code. You follow a structure, you adjust as you go, you taste and iterate, and when it works it is genuinely satisfying.
            </p>
          </div>
        </div>

        {/* Section 6: Gaming */}
        <div className="card p-8 md:p-12 border border-white/5 hover:border-primary/30 transition-all duration-300 bg-gradient-to-br from-purple/5 to-transparent">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Yes, I Am a <span className="text-gradient-purple">Gamer</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-6">
            And I say that with absolutely no shame.
          </p>
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              It actually started on the same Windows XP computer my sister built me. My very first gaming experience was MAME32 and Street Fighter and I was completely hooked from the first round. There was something about the logic of it, learning the moves, reading your opponent, figuring out the pattern, that felt like a puzzle I wanted to solve over and over again.
            </p>
            <p>
              As I grew up my brothers took over my gaming education and introduced me to a whole new world. Grand Theft Auto: Vice City, Hitman 2: Silent Assassin, Need for Speed: Most Wanted. Suddenly I was not just playing games, I was living in them, exploring open worlds, making decisions, causing a completely unreasonable amount of chaos in virtual cities and somehow always coming back for more. Those games taught me more about storytelling, systems design and consequence mechanics than I realized at the time.
            </p>
            <p>
              I still play all of them to this day. Some things do not change and honestly why would you fix what is not broken.
            </p>

            <div className="mt-8 p-6 bg-surface rounded-lg border border-primary/20">
              <h3 className="text-primary font-semibold text-xl mb-6">My Top Three Games (Ranked With Full Conviction)</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white font-bold text-lg">🥇 Call of Duty</p>
                  <p className="text-muted-light">The strategy, the reflexes, the team coordination, it is genuinely one of the most satisfying games to play well. When a match comes together it feels like a perfectly executed deployment. No bugs, no errors, just clean results.</p>
                </div>
                <div>
                  <p className="text-white font-bold text-lg">🥈 GTA 5</p>
                  <p className="text-muted-light">I have probably lost more hours to this game than I would like to calculate. The world Rockstar built is extraordinary and I will defend that opinion confidently.</p>
                </div>
                <div>
                  <p className="text-white font-bold text-lg">🥉 Fortnite</p>
                  <p className="text-muted-light">Yes, Fortnite. The building mechanics alone make it one of the most creative shooters ever made and I am not apologizing for enjoying it.</p>
                </div>
              </div>
              <p className="mt-6 text-primary italic">
                And GTA 6. I am waiting. We are all waiting. Rockstar keeps moving the release date and at this point I have accepted that it will arrive when it arrives and I will drop everything when it does.
              </p>
            </div>

            <p className="mt-8">
              Gaming taught me patience, strategy, pattern recognition and how to stay calm under pressure. I genuinely believe those skills show up in my work every single day.
            </p>
          </div>
        </div>

        {/* Section 7: Music & Sound */}
        <div className="card p-8 md:p-12 border border-white/5 hover:border-primary/30 transition-all duration-300">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                What I Am <span className="text-gradient">Listening To</span>
            </h2>
            <div className="space-y-6 text-lg text-muted leading-relaxed">
                <p>
                Music is a big part of how I move through my day, especially when I am deep in a coding session. My playlist depends entirely on what kind of problem I am solving.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-surface rounded-lg border border-primary/20 hover:border-primary/50 transition-all">
                    <h3 className="text-primary font-semibold text-lg mb-3">🎵 70% of the Time</h3>
                    <p>
                    <strong className="text-white">Afrobeats</strong> - There is an energy to it that keeps me in flow without pulling my attention away from what I am building. It feels like the soundtrack of where I come from and it keeps me grounded even when I am deep inside a complex problem.
                    </p>
                </div>
                <div className="p-6 bg-surface rounded-lg border border-purple/20 hover:border-purple/50 transition-all">
                    <h3 className="text-purple font-semibold text-lg mb-3">🎧 When I Need Focus</h3>
                    <p>
                    <strong className="text-white">Classical & Ambient</strong> - Yanni, Enya, Johann Pachelbel, and The Cinematic Orchestra. There is something about instrumental music that creates the kind of quiet inside your head that lets the real thinking happen.
                    </p>
                </div>
                <div className="p-6 bg-surface rounded-lg border border-emerald-500/20 hover:border-emerald-500/50 transition-all">
                    <h3 className="text-emerald-400 font-semibold text-lg mb-3">💫 For Deep Work</h3>
                    <p>
                    <strong className="text-white">Soulful & Introspective</strong> - Sade and Tracy Chapman. Their smooth, reflective vocals and meaningful lyrics create the perfect backdrop for thoughtful problem-solving. There is poetry in their words that resonates with how I think through complex challenges.
                    </p>
                </div>
                <div className="p-6 bg-surface rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
                    <h3 className="text-cyan-400 font-semibold text-lg mb-3">🎼 For Everything In Between</h3>
                    <p>
                    <strong className="text-white">James Blunt</strong> - His acoustic melodies and emotional depth keep me grounded and present. Perfect for those moments when I need balance between focused work and maintaining perspective on why I am building in the first place.
                    </p>
                </div>
                </div>
                <p className="mt-8">
                So if you ever join a call with me and hear something unexpected in the background, now you know. It could be Afrobeats keeping the energy up, classical and ambient music keeping the chaos out, Sade or Tracy Chapman keeping me grounded, or James Blunt reminding me to stay balanced. There is no wasted moment in my playlist.
                </p>
            </div>
        </div>

        {/* Section 8: What People Say */}
        <div className="card p-8 md:p-12 border border-white/5 hover:border-primary/30 transition-all duration-300 bg-gradient-to-br from-primary/5 to-transparent">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
            Three Things People Who Know Me <span className="text-gradient">Would Say</span>
          </h2>
          <div className="space-y-6">
            <div className="p-6 bg-surface rounded-lg border-l-4 border-primary">
              <h3 className="text-white font-semibold text-lg mb-2">She sets a standard and keeps it.</h3>
              <p className="text-muted">
                Not just in work but in everything. Graduating Cum Laude twice while navigating university through a pandemic is not an accident. It is a reflection of how she approaches every room she walks into.
              </p>
            </div>
            <div className="p-6 bg-surface rounded-lg border-l-4 border-purple">
              <h3 className="text-white font-semibold text-lg mb-2">She asks good questions.</h3>
              <p className="text-muted">
                Not because she does not know the answer but because she wants to make sure she understands fully before she builds. That curiosity is what separates good developers from great ones.
              </p>
            </div>
            <div className="p-6 bg-surface rounded-lg border-l-4 border-emerald-500">
              <h3 className="text-white font-semibold text-lg mb-2">She belongs in every room she enters.</h3>
              <p className="text-muted">
                Being the only woman to graduate Cum Laude in her class could have felt isolating. Instead it became a reminder that spaces are not always built for you, but that does not mean you do not belong in them. She belongs. Fully.
              </p>
            </div>
          </div>
        </div>

        {/* Section 9: Community & Culture */}
        <div className="card p-8 md:p-12 border border-white/5 hover:border-primary/30 transition-all duration-300">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            I Care About More Than Just <span className="text-gradient">Code</span>
          </h2>
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              I was born in Giyani, Limpopo, and in 2010 my family officially moved to Ennerdale, Johannesburg South. That move shaped me more than I sometimes realize. Giyani is a small town with a big sense of community, the kind of place where everyone knows everyone and life moves at its own pace. Ennerdale brought something different, a township with its own energy, hustle and heart. Between those two places I learned what it means to adapt, to find your footing in a new environment and to carry where you come from with you without being limited by it.
            </p>
            <p>
              My home growing up was also wonderfully complicated in the best way. My mother is Tsonga and my father is Swati, though he speaks mostly Zulu. So I grew up in a multilingual household navigating two cultures, multiple languages and the beautiful chaos that comes with that. Code switching was something I did at the dinner table long before I ever did it in a terminal. Growing up that way taught me to listen carefully, to read a room, to communicate across differences and to find common ground with people who come from completely different backgrounds to my own.
            </p>
            <p>
              It also gave me a deep awareness of how many South Africans are underserved by the systems around them. I have seen communities where technology could make a real difference but the tools either do not exist or were not built with those communities in mind. That awareness sits behind the work I choose to do and the projects I choose to build.
            </p>
            <p className="mt-6 text-primary font-semibold text-lg">
              Technology should serve people. All people. Every line of code I write carries that belief.
            </p>
          </div>
        </div>

        {/* Section 10: Languages */}
        <div className="card p-8 md:p-12 border border-white/5 hover:border-primary/30 transition-all duration-300">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            The <span className="text-gradient">Languages</span> I Carry
          </h2>
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              Growing up in a multilingual home meant that language was never just a tool for me, it was an identity. At home in Giyani, Xitsonga was everything. It was how we laughed, how we argued, how we prayed, how we loved. It was the language of my childhood and it is still the one that feels most like home when I hear it.
            </p>
            <p>
              Then we moved to Ennerdale in 2010 and everything shifted. Suddenly Xitsonga was my home language but English was the language of school, of the neighbourhood, of survival. Afrikaans became my second additional language and I had to adapt fast. And I did, because that is what you do when your environment changes. You find your footing and you keep moving.
            </p>
            <p>
              But Ennerdale gave me something I did not expect. Friends from completely different tribes and cultures who thought it was perfectly normal to teach me their languages in between lunch and the next period. I picked up Sesotho from friendships that still mean a lot to me today. A little Sepedi found its way in too, not enough to hold a full conversation but enough to make someone feel seen when you try. There is something powerful about making the effort to meet someone in their language, even halfway.
            </p>
            <p>
              And then I went to university in the Eastern Cape and isiXhosa entered the chat whether I was ready or not. I practically lived in Gqeberha for four years. I did not have much of a choice, the university was not going to move to Johannesburg for my convenience. So I absorbed isiXhosa the way you absorb any language when you are fully immersed in it, through taxis, through res life, through conversations at the campus shop, through hearing it everywhere until your ear just starts to understand. By the time I graduated I had not mastered it but I had lived inside it long enough to respect it deeply.
            </p>

            <div className="p-6 bg-surface rounded-lg border border-primary/20 mt-6">
              <p className="text-white font-semibold mb-3">My Language Stack:</p>
              <p className="text-muted">
                English, Xitsonga, isiZulu, Sesotho, isiXhosa, a little Sepedi and Afrikaans. I did not plan to become someone who navigates multiple languages and cultures. I just grew up and paid attention.
              </p>
            </div>

            <p className="mt-6">
              In tech that translates directly. I work well with diverse teams because diversity has always been my normal. I can explain complex technical concepts to non technical stakeholders without making them feel talked down to. I ask clarifying questions instead of assuming. I notice when someone in a meeting has not been heard yet and I make space for that. These might sound like soft skills on a CV but they are actually the things that determine whether a team builds something great or just builds something that works.
            </p>
            <p>
              I also completed a 120 hour TEFL certification in Teaching English as a Foreign Language because communication has always mattered to me beyond the technical side of my work. Understanding how people learn and how to explain things clearly is something I actively invest in. A developer who can communicate well is worth twice as much to any team. I genuinely believe that.
            </p>
          </div>
        </div>

        {/* Section 11: What Drives Me */}
        <div className="card p-8 md:p-12 border border-white/5 hover:border-primary/30 transition-all duration-300">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
            What <span className="text-gradient">Drives</span> Me
          </h2>
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <div className="p-6 bg-surface rounded-lg border-l-4 border-primary">
              <h3 className="text-white font-semibold text-lg mb-2">Understanding</h3>
              <p>
                I am motivated by the feeling of understanding something I did not understand before. That moment when a concept clicks, when a bug finally reveals itself after hours of staring at the same lines, when a system you designed actually works the way you intended. That feeling is genuinely addictive to me.
              </p>
            </div>
            <div className="p-6 bg-surface rounded-lg border-l-4 border-primary">
              <h3 className="text-white font-semibold text-lg mb-2">Proof</h3>
              <p>
                I grew up in spaces where young Black women from townships were not always expected to walk into technical fields and thrive. Every Cum Laude, every certification, every project I ship is a data point. Not just for my own career but for the idea that this is possible and it belongs here. I do not carry that as pressure. I carry it as fuel.
              </p>
            </div>
            <div className="p-6 bg-surface rounded-lg border-l-4 border-primary">
              <h3 className="text-white font-semibold text-lg mb-2">People</h3>
              <p>
                I am motivated by the people behind the problems. When I am building something I am always thinking about the person on the other side of the screen. Their experience matters to me and that keeps me honest about the quality of what I build.
              </p>
            </div>
            <div className="p-6 bg-surface rounded-lg border-l-4 border-primary">
              <h3 className="text-white font-semibold text-lg mb-2">Growth</h3>
              <p>
                I am motivated by growth that I can measure. Looking back at who I was in 2020, a first year student doing pseudocode in a pandemic, and comparing that to who I am now, that distance means everything to me. And I am nowhere near done.
              </p>
            </div>
          </div>
        </div>

        {/* Section 12: Strengths & Growth */}
        <div className="card p-8 md:p-12 border border-white/5 hover:border-primary/30 transition-all duration-300">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
            My Strengths and Where I Am Still <span className="text-gradient">Growing</span>
          </h2>
          <p className="text-lg text-muted mb-8">
            I think one of the most important things you can do is know yourself honestly. Not just the polished version you present in professional settings but the full picture.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4 text-primary">✓ Consistency</h3>
              <p className="text-muted">
                I do not just show up when things are exciting. I show up when it is hard, when it is repetitive, when the problem is not glamorous and the solution is not obvious. That consistency produced two Cum Laude graduations and projects I am genuinely proud of.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4 text-primary">✓ Logical Thinking</h3>
              <p className="text-muted">
                I enjoy breaking a large problem into smaller pieces, understanding how the parts relate to each other and working through them methodically. Whether it is debugging or designing a database schema, I am comfortable sitting inside a problem until it makes sense.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4 text-primary">✓ Quick Learning</h3>
              <p className="text-muted">
                I went from pseudocode in 2020 to building containerized full stack applications with Docker, JWT authentication and cloud integrations within a few years. I do not wait to feel fully ready before I start. I start and learn as I go.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4 text-primary">→ Still Growing</h3>
              <p className="text-muted">
                I am still building confidence in speaking up in rooms where I am the least experienced person. I know my perspective is worth sharing, and I am still convincing the part of my brain that was not always told that.
              </p>
            </div>
          </div>

          <p className="text-muted">
            I am also still developing my depth in areas like system architecture and advanced cloud design. I have a solid foundation and I understand the concepts but I know that true expertise comes with time and experience and I am actively working towards it.
          </p>
          <p className="text-primary font-semibold mt-4">
            I do not believe in pretending weaknesses do not exist. I believe in knowing exactly what they are so you can do something about them.
          </p>
        </div>

        {/* Section 13: Team Environment */}
        <div className="card p-8 md:p-12 border border-white/5 hover:border-primary/30 transition-all duration-300">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
            The Kind of <span className="text-gradient">Team</span> I Thrive In
          </h2>
          <p className="text-lg text-muted mb-8">
            I have thought a lot about the environments where I do my best work and I think being honest about this is just as useful for a team trying to hire as it is for me trying to find the right fit.
          </p>

          <div className="space-y-4">
            <div className="p-6 bg-surface rounded-lg border border-primary/20 hover:border-primary/50 transition-all">
              <h3 className="text-primary font-semibold text-lg mb-2">Curiosity Valued</h3>
              <p className="text-muted">
                Where asking why something works a certain way is welcomed rather than treated as a sign that you do not belong. I do my best work when I feel like learning is built into the culture.
              </p>
            </div>
            <div className="p-6 bg-surface rounded-lg border border-primary/20 hover:border-primary/50 transition-all">
              <h3 className="text-primary font-semibold text-lg mb-2">Open Communication</h3>
              <p className="text-muted">
                I prefer a team that has honest conversations about what is working and what is not over one that keeps everything polished on the surface. I am not afraid of feedback. I genuinely want it.
              </p>
            </div>
            <div className="p-6 bg-surface rounded-lg border border-primary/20 hover:border-primary/50 transition-all">
              <h3 className="text-primary font-semibold text-lg mb-2">Structure & Trust</h3>
              <p className="text-muted">
                Environments that have structure but also trust their people. I do not need someone standing over my shoulder. I am self directed and I take ownership seriously. But I also value clear expectations and good documentation.
              </p>
            </div>
            <div className="p-6 bg-surface rounded-lg border border-primary/20 hover:border-primary/50 transition-all">
              <h3 className="text-primary font-semibold text-lg mb-2">Real Diversity</h3>
              <p className="text-muted">
                Where diversity is real and not just a talking point. I am most comfortable in rooms that reflect that and I genuinely believe the best products are built by teams who bring different lived experiences.
              </p>
            </div>
          </div>

          <p className="mt-8 text-primary font-semibold text-lg">
            If that sounds like your team, I would really love to talk.
          </p>
        </div>

        {/* Section 14: Coffee Talk */}
        <div className="card p-8 md:p-12 border border-white/5 hover:border-primary/30 transition-all duration-300 bg-gradient-to-br from-primary/5 to-transparent">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
            If We Were Having <span className="text-gradient">Coffee</span>
          </h2>
          <p className="text-lg text-muted mb-8">
            This section is for the parts of me that do not fit neatly anywhere else but I think are worth knowing.
          </p>

          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <div className="flex gap-4">
              <div className="text-primary font-bold text-2xl flex-shrink-0">⏰</div>
              <p>
                I am the kind of person who will show up five minutes early to everything. Punctuality is respect and I take it seriously.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-primary font-bold text-2xl flex-shrink-0">📚</div>
              <p>
                I genuinely enjoy learning for its own sake, not just for career advancement. I read about things that have nothing to do with tech. I watch documentaries. I ask questions in conversations that take people by surprise. Curiosity is just how I am wired.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-primary font-bold text-2xl flex-shrink-0">🎯</div>
              <p>
                I have a quiet competitive streak. I do not need to win against other people but I absolutely need to be better than I was yesterday. That internal drive is what got me through a pandemic year at university and keeps me building projects even when no one is watching.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-primary font-bold text-2xl flex-shrink-0">🧠</div>
              <p>
                I am someone who values deep work. I do my best thinking when I can fully immerse myself in a problem without interruption. Give me a task, give me context, give me the space to think it through properly and I will come back with something worth looking at.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-primary font-bold text-2xl flex-shrink-0">💬</div>
              <p>
                And if we were actually having coffee I would want to know about you too. What are you building, what problems are you trying to solve, what made you choose the work you do. I am genuinely interested in people and their stories. Always have been.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section">
        <div className="mb-12 text-center">
          <span className="text-primary uppercase tracking-widest text-sm font-medium">
            Life & Moments
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-white">
            A Visual <span className="text-gradient">Journey</span>
          </h2>
          <p className="mt-6 text-lg text-muted max-w-2xl mx-auto">
            Beyond code and work, here is a glimpse into the moments that shape me, the places I have been, and the life I am building.
          </p>
        </div>
        <GallerySection />
      </section>

      {/* Final CTA Section */}
      <section className="section">
        <div className="card p-12 md:p-16 text-center border border-white/5 hover:border-primary/30 transition-all duration-300">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Let us <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
            I am open to junior developer roles, ServiceNow opportunities and teams where I can show up fully, grow fast and build things worth building. If you are looking for someone who is technically capable, genuinely curious, culturally aware and not afraid to be the only one in the room, I would love to chat.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dark text-white font-medium shadow-glow hover:scale-105 transition-transform"
            >
              View My Projects
              <ChevronRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-surface border border-primary/30 text-white font-medium hover:border-primary/60 transition-all"
            >
              Get In Touch
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
