import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/enquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);

        setName("");
        setEmail("");
        setPhone("");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Server connection failed");
    }

    setLoading(false);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>AI & Robotics Summer Workshop</h1>

          <p>
            Learn Artificial Intelligence and Robotics through exciting
            hands-on projects, coding activities, and real-world
            applications designed for young innovators.
          </p>
<button
  onClick={() =>
    document
      .getElementById("register")
      ?.scrollIntoView({
        behavior: "smooth",
      })
  }
>
  Enroll Now
</button>
        </div>
      </section>

      {/* Workshop Details */}
      <section className="details">
        <h2>Workshop Details</h2>

        <div className="details-grid">
          <div className="card">
            <h3>Age Group</h3>
            <p>8–14 Years</p>
          </div>

          <div className="card">
            <h3>Duration</h3>
            <p>4 Weeks</p>
          </div>

          <div className="card">
            <h3>Mode</h3>
            <p>Online</p>
          </div>

          <div className="card">
            <h3>Fee</h3>
            <p>₹2,999</p>
          </div>

          <div className="card">
            <h3>Start Date</h3>
            <p>15 July 2026</p>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="outcomes">
        <h2>What You'll Learn</h2>

        <div className="outcomes-grid">
          <div className="outcome-card">
            Introduction to Artificial Intelligence
          </div>

          <div className="outcome-card">
            Build Simple Robotics Projects
          </div>

          <div className="outcome-card">
            Programming Fundamentals
          </div>

          <div className="outcome-card">
            Problem Solving & Logical Thinking
          </div>

          <div className="outcome-card">
            Hands-on Project Experience
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item">
          <h3>Do students need coding experience?</h3>
          <p>No, beginners are welcome.</p>
        </div>

        <div className="faq-item">
          <h3>Are classes conducted live?</h3>
          <p>Yes, all sessions are conducted live online.</p>
        </div>

        <div className="faq-item">
          <h3>Will participants receive a certificate?</h3>
          <p>Yes, after successful completion.</p>
        </div>
      </section>

{/* Registration Form */}
<section id="register" className="register">
  <h2>Register Now</h2>

  <form
    className="register-form"
    onSubmit={handleSubmit}
  >
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
            required
          />

          <button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Submitting..."
              : "Submit Enquiry"}
          </button>

          {message && (
            <p
              style={{
                marginTop: "10px",
                textAlign: "center",
                color: "#4ade80",
              }}
            >
              {message}
            </p>
          )}
        </form>
      </section>
    </div>
  );
}

export default App;