import React, { useState, useEffect } from "react";
import "./AdminDashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUsers, FaUserShield, FaUserCog, FaUserTag } from "react-icons/fa";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import AdminCard from "../../components/AdminCard/AdminCard";
import Button from "../../components/Button/Button";
import Table, { TableRow } from "../../components/Table/Table";

export default function AdDashboard() {
  const [pendingUsers, setPendingUsers] = useState([]);
  const [verificationIssues, setVerificationIssues] = useState([]);
  const navigate = useNavigate();

  // Static JSON data for pending verification requests
  const pendingUsersData = [
    { userId: 1, userName: "Alice Smith", requestDate: "2025-03-18" },
    { userId: 2, userName: "John Doe", requestDate: "2025-03-17" },
    { userId: 3, userName: "Emma Brown", requestDate: "2025-03-16" },
  ];

  // Static JSON data for verification issues
  const verificationIssuesData = [
    { userId: 4, userName: "Michael Lee", issue: "Invalid documents" },
    { userId: 5, userName: "Sophia Wilson", issue: "Mismatched ID details" },
    { userId: 6, userName: "David Johnson", issue: "Unclear image" },
  ];

  useEffect(() => {
    setPendingUsers(pendingUsersData);
  }, []);

  useEffect(() => {
    setVerificationIssues(verificationIssuesData);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? "Invalid Date" : date.toISOString().split("T")[0];
  };

  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
      <NavigationBar />

      <div style={{ display: "flex" }}>
        <AdminCard>
          <div style={{ display: "flex" }}>
            <div>
              <div className="Dash-card">Users</div>
              <div className="count">100</div>
            </div>
            <div className="user-icon">
              <FaUsers />
            </div>
          </div>
        </AdminCard>
        <AdminCard>
          <div style={{ display: "flex" }}>
            <div>
              <div className="Dash-card">Drivers</div>
              <div className="count">50</div>
            </div>
            <div className="user-icon">
              <FaUserShield />
            </div>
          </div>
        </AdminCard>
        <AdminCard>
          <div style={{ display: "flex" }}>
            <div>
              <div className="Dash-card">V.Owners</div>
              <div className="count">30</div>
            </div>
            <div className="user-icon">
              <FaUserTag />
            </div>
          </div>
        </AdminCard>
        <AdminCard>
          <div style={{ display: "flex" }}>
            <div>
              <div className="Dash-card">Admins</div>
              <div className="count">15</div>
            </div>
            <div className="user-icon">
              <FaUserCog />
            </div>
          </div>
        </AdminCard>
      </div>

      <div style={{ display: "flex" }}>
        {/* Verification Requests Table */}
        <div className="requests">
          <p style={{ fontSize: "1.75rem", fontWeight: "500" }}>Verify Requests</p>
          <div style={{ height: "410px" }}>
            <Table hover={true} style={{ height: "65vh", overflowY: "auto", fontSize: "1.10rem" }}>
              <TableRow data={["Name", "Date", "Status"]} />
              {pendingUsers.slice(0, 7).map((user) => (
                <TableRow
                  key={user.userId}
                  data={[
                    user.userName,
                    formatDate(user.requestDate),
                    <Button
                      type="button"
                      style={{ width: "100px" }}
                      value=" Verify"
                      outlined
                      onClick={() => navigate(`/Admin/AdminUserVerification/${user.userId}`)}
                    />,
                  ]}
                />
              ))}
            </Table>
          </div>
        </div>

        {/* Verification Issues Table */}
        <div className="issues">
          <p style={{ fontSize: "1.75rem", fontWeight: "500" }}>Verification Issues</p>
          <div style={{ height: "410px" }}>
            <Table hover={true} style={{ height: "65vh", overflowY: "auto", fontSize: "1.10rem" }}>
              <TableRow data={["Name", "Issue", "Status"]} />
              {verificationIssues.slice(0, 7).map((user) => (
                <TableRow
                  key={user.userId}
                  data={[
                    user.userName,
                    user.issue,
                    <Button
                      type="button"
                      value="Review"
                      style={{ width: "100px" }}
                      outlined
                      red
                      onClick={() => navigate(`/Admin/AdminUserVerification/${user.userId}`)}
                    />,
                  ]}
                />
              ))}
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
