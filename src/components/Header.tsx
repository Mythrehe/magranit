"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Drawer, Modal, Form, Input, Button, Tabs } from "antd";
import { 
  UserOutlined, 
  MenuOutlined,
  DownOutlined
} from "@ant-design/icons";
import "./Header.css";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileVisible, setMobileVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  
  // Controls sub-category accordion inside desktop menu dropdown on click
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const pathname = usePathname();
  const isCoursesActive = pathname ? pathname.startsWith("/courses") : false;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileVisible(false);
    setExpandedCategory(null);
  };

  const toggleCategory = (cat: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedCategory(expandedCategory === cat ? null : cat);
  };

  return (
    <div className="mo-header-container">
      {/* Main Navbar */}
      <nav className={`mo-navbar ${isSticky ? "sticky" : ""}`}>
        <div className="container mo-navbar-content">
          <a href="/" className="mo-logo" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src="/images/nori-icon-06.png" alt="magranit Logo" style={{ height: "32px", width: "auto" }} />
            <span style={{ fontFamily: "var(--font-primary)", fontSize: "24px", fontWeight: "800", color: "var(--dark-color)", letterSpacing: "-0.5px" }}>magranit</span>
          </a>

          {/* Desktop Menu - With Course Dropdown */}
          <ul className="mo-nav-menu">
            <li className="mo-nav-item"><a href="/" className="mo-nav-link">Home</a></li>
            <li className="mo-nav-item mo-nav-has-dropdown">
              <a href="/#courses" className={`mo-nav-link ${isCoursesActive ? "active" : ""}`}>
                Courses <DownOutlined style={{ fontSize: "10px", marginLeft: "4px" }} />
              </a>
              
              {/* Desktop Submenu holding 3 categories with side dropdown expands */}
              <ul className="mo-submenu">
                
                {/* SAP Modules Category */}
                <li className="mo-submenu-item-with-sub">
                  <div className="mo-submenu-cat-header" onClick={(e) => toggleCategory("sap", e)}>
                    <span>SAP Modules</span>
                    <span className="mo-cat-expand-icon">{expandedCategory === "sap" ? "▲" : "▼"}</span>
                  </div>
                  <ul className={`mo-sub-submenu ${expandedCategory === "sap" ? "open" : ""}`}>
                    <li><a href="/courses/sap-mm" className="mo-sub-submenu-link" onClick={closeMobileMenu}>SAP Material Management (MM)</a></li>
                    <li><a href="/courses/sap-abap" className="mo-sub-submenu-link" onClick={closeMobileMenu}>SAP ABAP</a></li>
                    <li><a href="/courses/sap-ariba" className="mo-sub-submenu-link" onClick={closeMobileMenu}>SAP Ariba</a></li>
                    <li><a href="/courses/sap-pm" className="mo-sub-submenu-link" onClick={closeMobileMenu}>SAP Plant Maintenance (PM)</a></li>
                    <li><a href="/courses/sap-basis" className="mo-sub-submenu-link" onClick={closeMobileMenu}>SAP Basis</a></li>
                    <li><a href="/courses/sap-cloud" className="mo-sub-submenu-link" onClick={closeMobileMenu}>SAP Cloud with S/4HANA</a></li>
                  </ul>
                </li>

                {/* AI Engineering Category */}
                <li className="mo-submenu-item-with-sub">
                  <div className="mo-submenu-cat-header" onClick={(e) => toggleCategory("ai", e)}>
                    <span>AI Engineering</span>
                    <span className="mo-cat-expand-icon">{expandedCategory === "ai" ? "▲" : "▼"}</span>
                  </div>
                  <ul className={`mo-sub-submenu ${expandedCategory === "ai" ? "open" : ""}`}>
                    <li><a href="/courses/ai-engineering?track=beginner" className="mo-sub-submenu-link" onClick={closeMobileMenu}>AI Engineering — Beginner</a></li>
                    <li><a href="/courses/ai-engineering?track=advanced" className="mo-sub-submenu-link" onClick={closeMobileMenu}>AI Engineering — Advanced</a></li>
                  </ul>
                </li>

                {/* Data Engineering Category */}
                <li className="mo-submenu-item-with-sub">
                  <div className="mo-submenu-cat-header" onClick={(e) => toggleCategory("data", e)}>
                    <span>Data Engineering</span>
                    <span className="mo-cat-expand-icon">{expandedCategory === "data" ? "▲" : "▼"}</span>
                  </div>
                  <ul className={`mo-sub-submenu ${expandedCategory === "data" ? "open" : ""}`}>
                    <li><a href="/courses/data-engineering?track=beginner" className="mo-sub-submenu-link" onClick={closeMobileMenu}>Data Engineering — Beginner</a></li>
                    <li><a href="/courses/data-engineering?track=advanced" className="mo-sub-submenu-link" onClick={closeMobileMenu}>Data Engineering — Advanced</a></li>
                  </ul>
                </li>

              </ul>
            </li>
            <li className="mo-nav-item"><a href="/#why-us" className="mo-nav-link">Why Us</a></li>
            <li className="mo-nav-item"><a href="/#how-it-works" className="mo-nav-link">How It Works</a></li>
            <li className="mo-nav-item"><a href="/book-demo" className="mo-nav-link">Contact</a></li>
          </ul>

          {/* Right Action Items */}
          <div className="mo-nav-actions">
            <a href="/book-demo" className="mo-btn mo-btn-primary">Book a Free Demo</a>
            <div className="mo-nav-hamburger" onClick={() => setMobileVisible(true)}>
              <MenuOutlined />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeMobileMenu}
        open={mobileVisible}
        width={280}
      >
        <ul className="mo-mobile-menu">
          <li className="mo-mobile-item"><a href="/" className="mo-mobile-link" onClick={closeMobileMenu}>Home</a></li>
          <li className="mo-mobile-item">
            <span className="mo-mobile-link">Courses</span>
            <ul className="mo-mobile-submenu">
              <li><a href="/courses/sap-mm" className="mo-mobile-sublink" onClick={closeMobileMenu}>SAP MM</a></li>
              <li><a href="/courses/sap-abap" className="mo-mobile-sublink" onClick={closeMobileMenu}>SAP ABAP</a></li>
              <li><a href="/courses/sap-ariba" className="mo-mobile-sublink" onClick={closeMobileMenu}>SAP Ariba</a></li>
              <li><a href="/courses/sap-pm" className="mo-mobile-sublink" onClick={closeMobileMenu}>SAP PM</a></li>
              <li><a href="/courses/sap-basis" className="mo-mobile-sublink" onClick={closeMobileMenu}>SAP Basis</a></li>
              <li><a href="/courses/sap-cloud" className="mo-mobile-sublink" onClick={closeMobileMenu}>SAP Cloud</a></li>
              <li><a href="/courses/ai-engineering?track=beginner" className="mo-mobile-sublink" onClick={closeMobileMenu}>AI Beginner</a></li>
              <li><a href="/courses/ai-engineering?track=advanced" className="mo-mobile-sublink" onClick={closeMobileMenu}>AI Advanced</a></li>
              <li><a href="/courses/data-engineering?track=beginner" className="mo-mobile-sublink" onClick={closeMobileMenu}>Data Beginner</a></li>
              <li><a href="/courses/data-engineering?track=advanced" className="mo-mobile-sublink" onClick={closeMobileMenu}>Data Advanced</a></li>
            </ul>
          </li>
          <li className="mo-mobile-item"><a href="/#why-us" className="mo-mobile-link" onClick={closeMobileMenu}>Why Us</a></li>
          <li className="mo-mobile-item"><a href="/#how-it-works" className="mo-mobile-link" onClick={closeMobileMenu}>How It Works</a></li>
          <li className="mo-mobile-item"><a href="/book-demo" className="mo-mobile-link" onClick={closeMobileMenu}>Contact</a></li>
        </ul>
      </Drawer>

      {/* Login/Register Modal */}
      <Modal
        title="Join magranit Platform"
        centered
        open={loginVisible}
        onCancel={() => setLoginVisible(false)}
        footer={null}
        width={400}
      >
        <div style={{ padding: "10px 0" }}>
          <Tabs defaultActiveKey="1" centered>
            <Tabs.TabPane tab="Sign In" key="1">
              <Form layout="vertical">
                <Form.Item label="Username or Email" name="username" rules={[{ required: true, message: 'Please input username!' }]}>
                  <Input placeholder="Enter username or email" />
                </Form.Item>
                <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input password!' }]}>
                  <Input.Password placeholder="Enter password" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" block size="large">Sign In</Button>
                </Form.Item>
              </Form>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Sign Up" key="2">
              <Form layout="vertical">
                <Form.Item label="Username" name="reg_username" rules={[{ required: true, message: 'Please input username!' }]}>
                  <Input placeholder="Choose username" />
                </Form.Item>
                <Form.Item label="Email" name="reg_email" rules={[{ required: true, type: 'email', message: 'Please input email!' }]}>
                  <Input placeholder="Enter email" />
                </Form.Item>
                <Form.Item label="Password" name="reg_password" rules={[{ required: true, message: 'Please input password!' }]}>
                  <Input.Password placeholder="Choose password" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" block size="large">Register</Button>
                </Form.Item>
              </Form>
            </Tabs.TabPane>
          </Tabs>
        </div>
      </Modal>
    </div>
  );
}
