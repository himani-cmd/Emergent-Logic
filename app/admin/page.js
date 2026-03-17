'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
  Sparkles, Lock, LogOut, Users, Mail, Phone, Calendar,
  Trash2, RefreshCw, ArrowLeft, Shield, Eye, EyeOff
} from 'lucide-react';

export default function AdminPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [contacts, setContacts] = useState([]);
  const [loadingContacts, setLoadingContacts] = useState(false);

  // Check if already authenticated
  useEffect(() => {
    const auth = localStorage.getItem('adminAuth');
    if (auth) {
      verifyAuth(auth);
    } else {
      setIsLoading(false);
    }
  }, []);

  const verifyAuth = async (authToken) => {
    try {
      const response = await fetch('/api/admin/verify', {
        headers: { 'Authorization': `Basic ${authToken}` }
      });
      if (response.ok) {
        setIsAuthenticated(true);
        fetchContacts(authToken);
      } else {
        localStorage.removeItem('adminAuth');
      }
    } catch (error) {
      localStorage.removeItem('adminAuth');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const authToken = btoa(`${credentials.username}:${credentials.password}`);
    
    try {
      const response = await fetch('/api/admin/verify', {
        headers: { 'Authorization': `Basic ${authToken}` }
      });

      if (response.ok) {
        localStorage.setItem('adminAuth', authToken);
        setIsAuthenticated(true);
        toast.success('Login successful!');
        fetchContacts(authToken);
      } else {
        toast.error('Invalid credentials');
      }
    } catch (error) {
      toast.error('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
    setContacts([]);
    setCredentials({ username: '', password: '' });
    toast.success('Logged out successfully');
  };

  const fetchContacts = async (authToken) => {
    setLoadingContacts(true);
    const token = authToken || localStorage.getItem('adminAuth');
    
    try {
      const response = await fetch('/api/admin/contacts', {
        headers: { 'Authorization': `Basic ${token}` }
      });

      if (response.ok) {
        const data = await response.json();
        setContacts(data);
      }
    } catch (error) {
      toast.error('Failed to fetch contacts');
    } finally {
      setLoadingContacts(false);
    }
  };

  const deleteContact = async (contactId) => {
    const token = localStorage.getItem('adminAuth');
    
    try {
      const response = await fetch(`/api/admin/contacts/${contactId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Basic ${token}` }
      });

      if (response.ok) {
        setContacts(contacts.filter(c => c.id !== contactId));
        toast.success('Contact deleted successfully');
      } else {
        toast.error('Failed to delete contact');
      }
    } catch (error) {
      toast.error('An error occurred');
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600"></div>
      </div>
    );
  }

  // Login Form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900 flex items-center justify-center p-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        </div>
        
        <Card className="w-full max-w-md relative z-10 border-0 shadow-2xl">
          <CardHeader className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Admin Login</CardTitle>
            <CardDescription>Enter your credentials to access the dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  required
                  className="mt-1"
                  placeholder="Enter username"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    required
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <Button type="submit" className="w-full bg-violet-600 hover:bg-violet-700" disabled={isLoading}>
                <Lock className="w-4 h-4 mr-2" />
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>
            </form>
            <div className="mt-6 text-center">
              <Link href="/" className="text-violet-600 hover:text-violet-700 text-sm flex items-center justify-center gap-1">
                <ArrowLeft className="w-4 h-4" /> Back to website
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Emergent Logic</span>
            </Link>
            <Badge variant="secondary">Admin Dashboard</Badge>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Contacts</CardTitle>
              <Users className="w-5 h-5 text-violet-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{contacts.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">This Month</CardTitle>
              <Calendar className="w-5 h-5 text-violet-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {contacts.filter(c => {
                  const date = new Date(c.created_at);
                  const now = new Date();
                  return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
                }).length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Latest Contact</CardTitle>
              <Mail className="w-5 h-5 text-violet-600" />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-semibold truncate">
                {contacts[0]?.email || 'No contacts yet'}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contacts Table */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Contact Submissions</CardTitle>
              <CardDescription>Manage contact form submissions</CardDescription>
            </div>
            <Button variant="outline" onClick={() => fetchContacts()} disabled={loadingContacts}>
              <RefreshCw className={`w-4 h-4 mr-2 ${loadingContacts ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </CardHeader>
          <CardContent>
            {contacts.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No contact submissions yet</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contacts.map((contact) => (
                      <TableRow key={contact.id}>
                        <TableCell className="font-medium">
                          {contact.first_name} {contact.last_name}
                        </TableCell>
                        <TableCell>
                          <a href={`mailto:${contact.email}`} className="text-violet-600 hover:underline">
                            {contact.email}
                          </a>
                        </TableCell>
                        <TableCell>
                          <a href={`tel:${contact.phone}`} className="text-violet-600 hover:underline">
                            {contact.phone}
                          </a>
                        </TableCell>
                        <TableCell>
                          {new Date(contact.created_at).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="text-right">
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Delete Contact</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to delete this contact? This action cannot be undone.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => deleteContact(contact.id)}
                                  className="bg-red-600 hover:bg-red-700"
                                >
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
