// import React from 'react';

// function HomePage() {
//   return (
//     <div>
//       <h1>Welcome to the dashboard</h1>
//     </div>
//   );
// }

// export default HomePage;

import React, { useState, useEffect } from "react";
import "./AdminDashboard.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import AdminCard from "../../components/AdminCard/AdminCard";
import Button from "../../components/Button/Button";
import Table, { TableRow } from "../../components/Table/Table";

export default function AdDashboard() {
  const [adminCount, setAdminCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [pendingUsers, setPendingUsers] = useState([]);
  const [verifiedUserCount, setVerifiedUserCount] = useState(0);
  const [verificationIssues, setVerificationIssues] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminCount = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8003/admin/getAdminCount"
        );
        setAdminCount(response.data.count);
      } catch (error) {
        console.log("Error fetching admin count:", error);
      }
    };

    fetchAdminCount();
  }, []);

  useEffect(() => {
    const fetchPendingUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8004/admin/getPendingUsers"
        );
        setPendingUsers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching pending users:", error);
      }
    };

    fetchPendingUsers();
  }, []);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8004/admin/getUserCount"
        );
        setUserCount(response.data.count);
      } catch (error) {
        console.error("Error fetching user count:", error);
      }
    };

    fetchUserCount();
  }, []);

  useEffect(() => {
    const fetchVerifiedUserCount = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8004/admin/getVerifiedUserCount"
        );
        setVerifiedUserCount(response.data.count);
      } catch (error) {
        console.error("Error fetching verified user count:", error);
      }
    };

    fetchVerifiedUserCount();
  }, []);

  useEffect(() => {
    const fetchVerificationIssues = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8004/admin/getUsersWithVerificationIssues"
        );
        setVerificationIssues(response.data);
        console.log("issue:",response.data);
      } catch (error) {
        console.error("Error fetching verification issues:", error);
      }
    };

    fetchVerificationIssues();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }
    return date.toISOString().split("T")[0];
  };

  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
      <NavigationBar />
    
      <div style={{ display: "flex" }}>
        <AdminCard>
          <div style={{ display: "flex" }}>
            <div>
              <div className="Dash-card">Users</div>
              <div className="count">{userCount}</div>
            </div>
            <div className="user-icon">
              <FaUsers />
            </div>
          </div>
        </AdminCard>
        <AdminCard>
          <div style={{ display: "flex" }}>
            <div>
              <div className="Dash-card">Verified</div>
              <div className="count">{verifiedUserCount}</div>
            </div>
            <div className="user-icon">
              <FaUserCheck />
            </div>
          </div>
        </AdminCard>
        <AdminCard>
          <div style={{ display: "flex" }}>
            <div>
              <div className="Dash-card">Admin</div>
              <div className="count">{adminCount}</div>
            </div>
            <div className="user-icon">
              <FaUserCog />
            </div>
          </div>
        </AdminCard>
      </div>
      <div style={{ display: "flex" }}>
        <div className="requests">
          <p style={{ fontSize: "1.75rem", fontWeight: "500" }}>
            Verify Requests
          </p>
          <div style={{ height: "410px" }}>
            <Table
              hover={true}
              style={{ height: "65vh", overflowY: "auto", fontSize: "1.10rem" }}
            >
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
                      onClick={() =>
                        navigate(`/Admin/AdminUserVerification/${user.userId}`)
                      }
                    />,
                  ]}
                />
              ))}
            </Table>
          </div>
          <div className="ViewAll-btn">
            <Link to="/admin/ViewAll">
              <Button type="button" value=" View All" />
            </Link>
          </div>
        </div>
        <div className="issues">
          <p style={{ fontSize: "1.75rem", fontWeight: "500" }}>
            {" "}
            Verification Issues
          </p>
          <div style={{ height: "410px" }}>
            <Table
              hover={true}
              style={{ height: "65vh", overflowY: "auto", fontSize: "1.10rem" }}
            >
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
                      onClick={() =>
                        navigate(`/Admin/AdminUserVerification/${user.userId}`)
                      }
                    />,
                  ]}
                />
              ))}
            </Table>
          </div>
          <div className="ViewAll-btn">
            <Link to="/admin/ViewIssues">
              <Button type="button" value=" View All" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

