"use client";

import React, { useState } from "react";
import { Form, Input, Select, Checkbox, Button } from "antd";
import { CheckCircleOutlined, EditOutlined } from "@ant-design/icons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./book-demo.css";

const { Option, OptGroup } = Select;

export default function BookDemoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", course: "" });

  const onFinish = (values: any) => {
    console.log("Demo Request Submitted:", values);
    setFormData({
      name: values.name,
      course: values.course
    });
    setIsSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="mo-book-demo-page">
        {/* Left Column: Background Image with Dark Overlay */}
        <div className="mo-demo-left" style={{ backgroundImage: "url('/images/nori-team-11.jpg')" }}>
          <div className="mo-demo-left-overlay">
            <div className="mo-demo-left-content">
              <span className="mo-demo-badge-light">
                <EditOutlined style={{ marginRight: "6px" }} /> CONTACT US
              </span>
              <h2 className="mo-demo-left-title">
                We are always ready to help you & answer your questions
              </h2>
            </div>
          </div>
        </div>

        {/* Right Column: Lighter Background Form */}
        <div className="mo-demo-right">
          <div className="mo-demo-right-content">
            {!isSubmitted ? (
              <>
                <span className="mo-demo-badge-dark">
                  <EditOutlined style={{ marginRight: "6px" }} /> CONTACT US
                </span>
                <h2 className="mo-demo-right-title">
                  Get the best courses & upgrade your skills <span className="mo-demo-speech-bubble">💬</span>
                </h2>
                <p className="mo-demo-right-desc">
                  Upgrade your professional career with expert-led training in SAP, AI, and Data Engineering. Our flexible sessions, free server sandboxes, and dedicated mentors ensure you master key technical skills at your own pace.
                </p>

                <Form
                  name="book_demo_form"
                  layout="vertical"
                  onFinish={onFinish}
                  autoComplete="off"
                  requiredMark={false}
                >
                  {/* Form fields grid */}
                  <div className="mo-demo-form-grid">
                    <Form.Item
                      name="name"
                      rules={[{ required: true, message: "Please enter your name" }]}
                    >
                      <Input placeholder="Name *" />
                    </Form.Item>

                    <Form.Item
                      name="email"
                      rules={[
                        { required: true, message: "Please enter your email" },
                        { type: "email", message: "Please enter a valid email" }
                      ]}
                    >
                      <Input placeholder="Email *" />
                    </Form.Item>

                    <Form.Item
                      name="mobile"
                      rules={[
                        { required: true, message: "Please enter your mobile number" },
                        { pattern: /^[0-9+\s-]{8,15}$/, message: "Please enter a valid phone number" }
                      ]}
                    >
                      <Input placeholder="phone number *" />
                    </Form.Item>

                    <Form.Item
                      name="course"
                      rules={[{ required: true, message: "Please select a course" }]}
                    >
                      <Select
                        placeholder="Select Course *"
                        allowClear
                      >
                        <OptGroup label="SAP Modules">
                          <Option value="SAP Material Management (MM)">SAP Material Management (MM)</Option>
                          <Option value="SAP ABAP">SAP ABAP</Option>
                          <Option value="SAP Ariba">SAP Ariba</Option>
                          <Option value="SAP Plant Maintenance (PM)">SAP Plant Maintenance (PM)</Option>
                          <Option value="SAP Basis">SAP Basis</Option>
                          <Option value="SAP Cloud with S/4HANA">SAP Cloud with S/4HANA</Option>
                        </OptGroup>
                        <OptGroup label="AI Engineering">
                          <Option value="AI Engineering — Beginner">AI Engineering — Beginner</Option>
                          <Option value="AI Engineering — Advanced">AI Engineering — Advanced</Option>
                        </OptGroup>
                        <OptGroup label="Data Engineering">
                          <Option value="Data Engineering — Beginner">Data Engineering — Beginner</Option>
                          <Option value="Data Engineering — Advanced">Data Engineering — Advanced</Option>
                        </OptGroup>
                      </Select>
                    </Form.Item>
                  </div>

                  {/* Message box */}
                  <Form.Item
                    name="message"
                    rules={[{ required: true, message: "Please enter your message" }]}
                  >
                    <Input.TextArea placeholder="Message" rows={4} />
                  </Form.Item>

                  {/* Terms Checkbox */}
                  <Form.Item
                    name="agree"
                    valuePropName="checked"
                    rules={[
                      {
                        validator: (_, value) =>
                          value ? Promise.resolve() : Promise.reject(new Error("You must accept the privacy policy"))
                      }
                    ]}
                    style={{ marginBottom: "25px" }}
                  >
                    <Checkbox>I accept the privacy and terms.</Checkbox>
                  </Form.Item>

                  {/* Submit Button */}
                  <Form.Item style={{ marginBottom: 0 }}>
                    <Button type="primary" htmlType="submit" size="large" className="mo-demo-submit-btn">
                      Request Free Demo Session
                    </Button>
                  </Form.Item>
                </Form>
              </>
            ) : (
              <div className="mo-demo-success-panel">
                <div className="mo-demo-success-icon-wrap flex-center">
                  <CheckCircleOutlined style={{ fontSize: "40px" }} />
                </div>
                <h2 className="mo-demo-success-title">Booking Successful!</h2>
                <p className="mo-demo-success-text">
                  Thank you, <strong>{formData.name}</strong>! Your request for a free demo session in <strong>{formData.course}</strong> has been logged. Our learning consultant will contact you shortly to schedule your demo.
                </p>
                <a href="/" className="mo-demo-success-back-btn">
                  Back to Homepage
                </a>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
