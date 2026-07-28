import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Admin() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login", { replace: true });
        } else {
            fetchLeads();
        }
    }, []);

    const [leads, setLeads] = useState([]);
    const [search, setSearch] = useState("");

    // Fetch all leads
    const fetchLeads = async () => {
        try {
            const response = await api.get("/leads");
            setLeads(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    // Search leads
    const searchLeads = async () => {
        try {
            if (search.trim() === "") {
                fetchLeads();
                return;
            }

            const response = await api.get(`/leads/search?name=${search}`);
            setLeads(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    // Update lead status
    const updateStatus = async (id, status) => {
        try {
            await api.put(`/leads/${id}/status?status=${status}`);
            fetchLeads();
        } catch (error) {
            console.error(error);
        }
    };

    // Logout
    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login", { replace: true });
    };

    return (
        <div className="container mt-5">

            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Admin Dashboard</h2>

                <button
                    className="btn btn-danger"
                    onClick={logout}
                >
                    Logout
                </button>
            </div>

            <div className="row mb-3">

                <div className="col-md-9">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="col-md-3">
                    <button
                        className="btn btn-primary w-100"
                        onClick={searchLeads}
                    >
                        Search
                    </button>
                </div>

            </div>

            <table className="table table-bordered table-striped">

                <thead className="table-dark">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Budget</th>
                    <th>Message</th>
                    <th>Status</th>
                </tr>
                </thead>

                <tbody>

                {leads.length > 0 ? (

                    leads.map((lead) => (

                        <tr key={lead.id}>

                            <td>{lead.name}</td>
                            <td>{lead.email}</td>
                            <td>{lead.budget}</td>
                            <td>{lead.message}</td>

                            <td>
                                <select
                                    className="form-select"
                                    value={lead.status}
                                    onChange={(e) =>
                                        updateStatus(
                                            lead.id,
                                            e.target.value
                                        )
                                    }
                                >
                                    <option value="New">New</option>
                                    <option value="Contacted">
                                        Contacted
                                    </option>
                                    <option value="Closed">
                                        Closed
                                    </option>
                                </select>
                            </td>

                        </tr>

                    ))

                ) : (

                    <tr>
                        <td colSpan="5" className="text-center">
                            No leads found
                        </td>
                    </tr>

                )}

                </tbody>

            </table>

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

export default Admin;