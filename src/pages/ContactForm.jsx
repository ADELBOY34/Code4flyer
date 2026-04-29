const team = [
  {
    id: 1,
    name: "Adel",
    role: "Frontend & Backend",
    email: "myriam@gmail.com",
    phone: "+213 7 00 00 00",
    photo: "/photos/alice.jpg", 
  },
  {
    id: 2,
    name: "Inesse",
    role: "Frontend & Backend",
    email: "myriam@gmail.com",
    phone: "+213 7 00 00 00",
    photo: "/photos/bob.jpg",
  },
  {
    id: 3,
    name: "Islam",
    role: "Frontend & Backend",
    email: "myriam@gmail.com",
    phone: "+213 7 00 00 00",
    photo: "/photos/clara.jpg",
  },
  {
    id: 4,
    name: "Mounir",
    role: "Frontend & Backend",
    email: "myriam@gmail.com",
    phone: "+213 7 00 00 00",
    photo: "/photos/david.jpg",
  },
  {
    id: 5,
    name: "Myriam",
    role: "Frontend & Backend",
    email: "myriam@gmail.com",
    phone: "+213 7 00 00 00",
    photo: "/photos/eva.jpg",
  },
];

const subjects = ["Git / GitHub", "HTML / CSS", "JavaScript", "React", "General question"];


import { useState } from "react";

export default function Contact() {

    const [selectedPerson, setSelectedPerson] = useState("");
    const [selectedSubject, setSelectedSubject] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
    e.preventDefault(); 

    const person = team.find((m) => m.id === Number(selectedPerson));
    if (!person) return alert("Please select a person.");
    if (!selectedSubject) return alert("Please select a subject.");

    const mailtoLink =
      `mailto:${person.email}` +
      `?subject=${encodeURIComponent(selectedSubject)}` +
      `&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoLink; 
  }

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>

      {/* ── SECTION 1: Team cards ── */}
      <h1>Contact our team</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
        {team.map((member) => (
          <div
            key={member.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 12,
              padding: "1rem",
              textAlign: "center",
              width: 150,
            }}
          >
            <img
              src={member.photo}
              alt={member.name}
              style={{ width: 70, height: 70, borderRadius: "50%", objectFit: "cover" }}
            />
            <p style={{ fontWeight: "bold", margin: "0.5rem 0 0" }}>{member.name}</p>
            <p style={{ color: "#666", fontSize: 13, margin: "0.2rem 0" }}>{member.role}</p>
            <p style={{ fontSize: 12 }}>✉ {member.email}</p>
            <p style={{ fontSize: 12 }}>📞 {member.phone}</p>
          </div>
        ))}
      </div>

      {/* ── SECTION 2: Contact form ── */}
      <h2>Send a message</h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: 500 }}>

        {/* Dropdown: pick a person */}
        <label>
          Contact person
          <select
            value={selectedPerson}
            onChange={(e) => setSelectedPerson(e.target.value)}
            style={{ display: "block", width: "100%", marginTop: 4 }}
          >
            <option value="">-- Select a person --</option>
            {team.map((member) => (
              <option key={member.id} value={member.id}>
                {member.name} — {member.role}
              </option>
            ))}
          </select>
        </label>

        {/* Dropdown: pick a subject */}
        <label>
          Subject
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            style={{ display: "block", width: "100%", marginTop: 4 }}
          >
            <option value="">-- Select a subject --</option>
            {subjects.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>

        {/* Optional message */}
        <label>
          Message (optional)
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Your message..."
            style={{ display: "block", width: "100%", marginTop: 4 }}
          />
        </label>

        <button type="submit">Send email →</button>

      </form>
    </div>
  );
}
