#!/usr/bin/env python3
"""
Backend API Testing for Emergent Logic Next.js App
Tests all backend endpoints with MongoDB integration
"""

import requests
import json
import base64
import time
from datetime import datetime

# Configuration
BASE_URL = "https://app-generator-223.preview.emergentagent.com"
ADMIN_USERNAME = "admin"
ADMIN_PASSWORD = "emergent2026"

# Generate Basic Auth header
def get_auth_header():
    credentials = f"{ADMIN_USERNAME}:{ADMIN_PASSWORD}"
    encoded = base64.b64encode(credentials.encode()).decode()
    return {"Authorization": f"Basic {encoded}"}

class BackendTester:
    def __init__(self):
        self.base_url = BASE_URL
        self.test_results = []
        self.created_contact_id = None
        
    def log_result(self, test_name, success, message, response_data=None):
        """Log test result"""
        result = {
            "test": test_name,
            "success": success,
            "message": message,
            "timestamp": datetime.now().isoformat()
        }
        if response_data:
            result["response"] = response_data
        self.test_results.append(result)
        
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status}: {test_name} - {message}")
        
    def test_root_endpoint(self):
        """Test GET /api/ - Root endpoint"""
        try:
            response = requests.get(f"{self.base_url}/api/")
            
            if response.status_code == 200:
                data = response.json()
                expected_message = "Emergent Logic API - AI-Powered Digital Solutions"
                
                if data.get("message") == expected_message:
                    self.log_result("Root Endpoint", True, "Root endpoint returns correct message", data)
                else:
                    self.log_result("Root Endpoint", False, f"Unexpected message: {data.get('message')}", data)
            else:
                self.log_result("Root Endpoint", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("Root Endpoint", False, f"Request failed: {str(e)}")
    
    def test_contact_creation(self):
        """Test POST /api/contact - Create contact submission"""
        try:
            contact_data = {
                "first_name": "John",
                "last_name": "Doe", 
                "email": "john.doe@emergentlogic.com",
                "phone": "555-123-4567",
                "message": "Testing the contact form API endpoint"
            }
            
            response = requests.post(
                f"{self.base_url}/api/contact",
                json=contact_data,
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code == 201:
                data = response.json()
                required_fields = ["id", "first_name", "last_name", "email", "phone", "message", "created_at"]
                
                if all(field in data for field in required_fields):
                    self.created_contact_id = data["id"]  # Store for delete test
                    self.log_result("Contact Creation", True, "Contact created successfully", data)
                else:
                    missing_fields = [f for f in required_fields if f not in data]
                    self.log_result("Contact Creation", False, f"Missing fields: {missing_fields}", data)
            else:
                self.log_result("Contact Creation", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("Contact Creation", False, f"Request failed: {str(e)}")
    
    def test_contact_retrieval(self):
        """Test GET /api/contact - Get all contacts"""
        try:
            response = requests.get(f"{self.base_url}/api/contact")
            
            if response.status_code == 200:
                data = response.json()
                
                if isinstance(data, list):
                    if len(data) > 0:
                        # Check if our created contact is in the list
                        contact_found = any(contact.get("id") == self.created_contact_id for contact in data)
                        if contact_found:
                            self.log_result("Contact Retrieval", True, f"Retrieved {len(data)} contacts, including created contact", {"count": len(data)})
                        else:
                            self.log_result("Contact Retrieval", True, f"Retrieved {len(data)} contacts (created contact not found)", {"count": len(data)})
                    else:
                        self.log_result("Contact Retrieval", True, "Retrieved empty contacts list", {"count": 0})
                else:
                    self.log_result("Contact Retrieval", False, f"Expected array, got: {type(data)}", data)
            else:
                self.log_result("Contact Retrieval", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("Contact Retrieval", False, f"Request failed: {str(e)}")
    
    def test_admin_authentication(self):
        """Test GET /api/admin/verify - Admin authentication"""
        try:
            # Test with valid credentials
            response = requests.get(
                f"{self.base_url}/api/admin/verify",
                headers=get_auth_header()
            )
            
            if response.status_code == 200:
                data = response.json()
                
                if data.get("authenticated") == True and data.get("username") == ADMIN_USERNAME:
                    self.log_result("Admin Authentication", True, "Admin authentication successful", data)
                else:
                    self.log_result("Admin Authentication", False, f"Unexpected auth response: {data}", data)
            else:
                self.log_result("Admin Authentication", False, f"HTTP {response.status_code}: {response.text}")
                
            # Test with invalid credentials
            invalid_auth = base64.b64encode("invalid:credentials".encode()).decode()
            response = requests.get(
                f"{self.base_url}/api/admin/verify",
                headers={"Authorization": f"Basic {invalid_auth}"}
            )
            
            if response.status_code == 401:
                self.log_result("Admin Authentication (Invalid)", True, "Invalid credentials correctly rejected")
            else:
                self.log_result("Admin Authentication (Invalid)", False, f"Expected 401, got {response.status_code}")
                
        except Exception as e:
            self.log_result("Admin Authentication", False, f"Request failed: {str(e)}")
    
    def test_admin_contacts_list(self):
        """Test GET /api/admin/contacts - Get all contacts (protected)"""
        try:
            response = requests.get(
                f"{self.base_url}/api/admin/contacts",
                headers=get_auth_header()
            )
            
            if response.status_code == 200:
                data = response.json()
                
                if isinstance(data, list):
                    self.log_result("Admin Contacts List", True, f"Retrieved {len(data)} contacts via admin endpoint", {"count": len(data)})
                else:
                    self.log_result("Admin Contacts List", False, f"Expected array, got: {type(data)}", data)
            else:
                self.log_result("Admin Contacts List", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("Admin Contacts List", False, f"Request failed: {str(e)}")
    
    def test_admin_contact_delete(self):
        """Test DELETE /api/admin/contacts/{id} - Delete contact (protected)"""
        if not self.created_contact_id:
            self.log_result("Admin Contact Delete", False, "No contact ID available for deletion test")
            return
            
        try:
            response = requests.delete(
                f"{self.base_url}/api/admin/contacts/{self.created_contact_id}",
                headers=get_auth_header()
            )
            
            if response.status_code == 200:
                data = response.json()
                
                if data.get("deleted") == True and data.get("id") == self.created_contact_id:
                    self.log_result("Admin Contact Delete", True, f"Contact {self.created_contact_id} deleted successfully", data)
                else:
                    self.log_result("Admin Contact Delete", False, f"Unexpected delete response: {data}", data)
            elif response.status_code == 404:
                self.log_result("Admin Contact Delete", False, "Contact not found for deletion", {"contact_id": self.created_contact_id})
            else:
                self.log_result("Admin Contact Delete", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("Admin Contact Delete", False, f"Request failed: {str(e)}")
    
    def test_status_creation(self):
        """Test POST /api/status - Create status check"""
        try:
            status_data = {
                "client_name": "EmergentLogic"
            }
            
            response = requests.post(
                f"{self.base_url}/api/status",
                json=status_data,
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code == 201:
                data = response.json()
                required_fields = ["id", "client_name", "timestamp"]
                
                if all(field in data for field in required_fields):
                    self.log_result("Status Creation", True, "Status check created successfully", data)
                else:
                    missing_fields = [f for f in required_fields if f not in data]
                    self.log_result("Status Creation", False, f"Missing fields: {missing_fields}", data)
            else:
                self.log_result("Status Creation", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("Status Creation", False, f"Request failed: {str(e)}")
    
    def test_status_retrieval(self):
        """Test GET /api/status - Get all status checks"""
        try:
            response = requests.get(f"{self.base_url}/api/status")
            
            if response.status_code == 200:
                data = response.json()
                
                if isinstance(data, list):
                    self.log_result("Status Retrieval", True, f"Retrieved {len(data)} status checks", {"count": len(data)})
                else:
                    self.log_result("Status Retrieval", False, f"Expected array, got: {type(data)}", data)
            else:
                self.log_result("Status Retrieval", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_result("Status Retrieval", False, f"Request failed: {str(e)}")
    
    def run_all_tests(self):
        """Run all backend tests in sequence"""
        print(f"🚀 Starting Backend API Tests for {self.base_url}")
        print("=" * 60)
        
        # Test sequence
        self.test_root_endpoint()
        self.test_contact_creation()
        self.test_contact_retrieval()
        self.test_admin_authentication()
        self.test_admin_contacts_list()
        self.test_admin_contact_delete()
        self.test_status_creation()
        self.test_status_retrieval()
        
        # Summary
        print("\n" + "=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        
        passed = sum(1 for result in self.test_results if result["success"])
        failed = len(self.test_results) - passed
        
        print(f"Total Tests: {len(self.test_results)}")
        print(f"Passed: {passed}")
        print(f"Failed: {failed}")
        print(f"Success Rate: {(passed/len(self.test_results)*100):.1f}%")
        
        if failed > 0:
            print("\n❌ FAILED TESTS:")
            for result in self.test_results:
                if not result["success"]:
                    print(f"  • {result['test']}: {result['message']}")
        
        return passed == len(self.test_results)

if __name__ == "__main__":
    try:
        tester = BackendTester()
        success = tester.run_all_tests()
        
        if success:
            print("\n🎉 All tests passed! Backend API is working correctly.")
        else:
            print("\n⚠️ Some tests failed. Check the logs above for details.")
            
    except KeyboardInterrupt:
        print("\n\n⏹️ Tests interrupted by user")
    except Exception as e:
        print(f"\n💥 Unexpected error during testing: {str(e)}")