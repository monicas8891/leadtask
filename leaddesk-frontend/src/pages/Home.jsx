import { useState } from "react";
import api from "../services/api";

function Home() {
    const [lead, setLead] = useState({
        name: "",
        email: "",
        budget: "",
        message: ""
    });

    const handleChange = (e) => {
        setLead({
            ...lead,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await api.post("/leads", lead);

            alert("Lead submitted successfully!");

            setLead({
                name: "",
                email: "",
                budget: "",
                message: ""
            });
        } catch (error) {
            alert("Failed to submit lead");
            console.error(error);
        }
    };

    return (
        <div className="container mt-5">

            <div className="text-center mb-5">
                <h1 className="text-primary">LeadDesk Mini</h1>
                <p>Submit your project enquiry below.</p>
            </div>

            <div className="card shadow p-4">
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={lead.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={lead.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label>Budget</label>
                        <input
                            type="text"
                            name="budget"
                            className="form-control"
                            value={lead.budget}
                            onChange={handleChange}
                            placeholder="Enter your budget"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label>Message</label>
                        <textarea
                            name="message"
                            rows="4"
                            className="form-control"
                            value={lead.message}
                            onChange={handleChange}
                            placeholder="Describe your project"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                    >
                        Submit Lead
                    </button>

                </form>
            </div>

            <footer className="text-center mt-5 py-3 border-top">
                <p className="mb-0">
                    Built for{" "}
                    <a
                        href="https://digitalheroesco.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Digital Heroes Training Task
                    </a>
                </p>
            </footer>

        </div>
    );
}

export default Home;