import { useState } from "react";

const team = [
{ id: 1, name: "Adel",    role: "Frontend & Backend", email: "adel@gmail.com",    phone: "213700000001" },
  { id: 2, name: "Inesse",  role: "Frontend & Backend", email: "inesse@gmail.com",  phone: "213700000002" },
  { id: 3, name: "Islam",   role: "Frontend & Backend", email: "islam@gmail.com",   phone: "213700000003" },
  { id: 4, name: "Mounir",  role: "Frontend & Backend", email: "mounir@gmail.com",  phone: "213700000004" },
  { id: 5, name: "Myriam",  role: "Frontend & Backend", email: "myriam@gmail.com",  phone: "213700000005" },
];

const subjects = ["Git / GitHub", "HTML / CSS", "JavaScript", "React", "General question"];
const avatarColors = ["#8cdccd", "#c8f0ea", "#a5e8dc", "#38f1cf", "#b2f5ea"];

function Avatar({ color }) {
  return (
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
      <circle cx="35" cy="35" r="35" fill={color} />
      <circle cx="35" cy="26" r="11" fill="#198c77" />
      <ellipse cx="35" cy="58" rx="18" ry="12" fill="#198c77" />
    </svg>
  );
}

export default function Contact() {
  const [selectedPerson, setSelectedPerson] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!selectedPerson) {
      alert("Please select a person.");
      return;
    }
    if (!selectedSubject) {
      alert("Please select a subject.");
      return;
    }

    const person = team.find((m) => m.id === Number(selectedPerson));

    const link = `mailto:${person.email}?subject=${encodeURIComponent(
      selectedSubject
    )}&body=${encodeURIComponent(message)}`;

    window.location.href = link;
  }

  return (
    <div style={{ backgroundColor: "#e6eeed", minHeight: "100vh", padding: "2rem" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        
        <h1 style={{ color: "#091211", fontWeight: 500 }}>Contact our team</h1>
        <p style={{ color: "#198c77", marginTop: 0, marginBottom: "2rem" }}>
          Reach the right person directly
        </p>

        {/* Team Cards */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
          {team.map((member, index) => (
            <div
              key={member.id}
              style={{
                backgroundColor: "#f0f8f7",
                border: "1px solid #c2dbd8",
                borderRadius: 14,
                padding: "1rem",
                textAlign: "center",
                width: 160,
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  margin: "0 auto 10px",
                  overflow: "hidden",
                  border: "2px solid #38f1cf",
                }}
              >
                <Avatar color={avatarColors[index]} />
              </div>

              {/* Name */}
              <p style={{ fontWeight: 500, margin: "0 0 4px", color: "#091211" }}>
                {member.name}
              </p>

              {/* Role */}
              <span
                style={{
                  fontSize: 11,
                  color: "#198c77",
                  backgroundColor: "#d4faf4",
                  borderRadius: 20,
                  padding: "2px 8px",
                  display: "inline-block",
                  marginBottom: 8,
                }}
              >
                {member.role}
              </span>

              {/* Contact Info */}
              <p style={{ fontSize: 11, color: "#091211", opacity: 0.6, margin: "2px 0" }}>
                ✉ {member.email}
              </p>
              <p style={{ fontSize: 11, color: "#091211", opacity: 0.6, margin: "2px 0" }}>
                📞 {member.phone}
              </p>

              {/* WhatsApp Button - FIXED */}
              <a
                href={`https://wa.me/${member.phone}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: 10,
                  backgroundColor: "#25D366",
                  color: "white",
                  fontSize: 11,
                  fontWeight: 500,
                  padding: "6px 14px",
                  borderRadius: 20,
                  textDecoration: "none",
                }}
              >
                WhatsApp
              </a>
            </div>
          ))}
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #c2dbd8", marginBottom: "2rem" }} />

        {/* Form */}
        <h2 style={{ color: "#091211", fontWeight: 500 }}>Send a message</h2>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: 500 }}
        >
          <label style={{ color: "#091211" }}>
            Contact person
            <select
              value={selectedPerson}
              onChange={(e) => setSelectedPerson(e.target.value)}
              style={{
                display: "block",
                width: "100%",
                marginTop: 4,
                padding: "9px 12px",
                borderRadius: 8,
                border: "1px solid #c2dbd8",
                backgroundColor: "#f0f8f7",
                color: "#091211",
                fontSize: 13,
              }}
            >
              <option value="">-- Select a person --</option>
              {team.map((member) => (
                <option key={member.id} value={member.id}>
                  {member.name} — {member.role}
                </option>
              ))}
            </select>
          </label>

          <label style={{ color: "#091211" }}>
            Subject
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              style={{
                display: "block",
                width: "100%",
                marginTop: 4,
                padding: "9px 12px",
                borderRadius: 8,
                border: "1px solid #c2dbd8",
                backgroundColor: "#f0f8f7",
                color: "#091211",
                fontSize: 13,
              }}
            >
              <option value="">-- Select a subject --</option>
              {subjects.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>

          <label style={{ color: "#091211" }}>
            Message (optional)
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="Your message..."
              style={{
                display: "block",
                width: "100%",
                marginTop: 4,
                padding: "9px 12px",
                borderRadius: 8,
                border: "1px solid #c2dbd8",
                backgroundColor: "#f0f8f7",
                color: "#091211",
                fontSize: 13,
                boxSizing: "border-box",
              }}
            />
          </label>

          <button
            type="submit"
            style={{
              backgroundColor: "#198c77",
              color: "#e6eeed",
              border: "none",
              borderRadius: 8,
              padding: "10px 24px",
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
              alignSelf: "flex-start",
            }}
          >
            Send email →
          </button>
        </form>
      </div>
    </div>
  );
}