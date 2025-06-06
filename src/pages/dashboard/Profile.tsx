import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/hooks/use-toast';

const Profile = () => {
  const { toast } = useToast();
  const [user, setUser] = useState({
    name: '',
    email: '',
    institution: '',
    position: '',
    phone: '',
    address: '',
    bio: '',
  });
  
  const [bankDetails, setBankDetails] = useState({
    accountHolderName: '',
    accountNumber: '',
    bankName: '',
    ifscCode: '',
    branchName: '',
    accountType: 'Savings'
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [isBankEditing, setIsBankEditing] = useState(false);
  const [tempUser, setTempUser] = useState({ ...user });
  const [tempBankDetails, setTempBankDetails] = useState({ ...bankDetails });

  useEffect(() => {
    // Get user email from localStorage
    const email = localStorage.getItem('userEmail') || '';
    
    // For demo purposes, generate some data based on the email
    const name = email.split('@')[0];
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
    
    // Set mock user data
    const userData = {
      name: formattedName,
      email: email,
      institution: 'Gujarat Technological University',
      position: 'Student Researcher',
      phone: '+91 9876543210',
      address: 'Ahmedabad, Gujarat, India',
      bio: 'A passionate researcher focused on innovative technology solutions for educational challenges.',
    };
    
    // Set mock bank details
    const mockBankDetails = {
      accountHolderName: formattedName,
      accountNumber: '1234567890123456',
      bankName: 'State Bank of India',
      ifscCode: 'SBIN0001234',
      branchName: 'Ahmedabad Main Branch',
      accountType: 'Savings'
    };
    
    setUser(userData);
    setBankDetails(mockBankDetails);
    setTempUser(userData);
    setTempBankDetails(mockBankDetails);
  }, []);

  const handleEditToggle = () => {
    if (isEditing) {
      // Save changes
      setUser({ ...tempUser });
      toast({
        title: "Profile updated",
        description: "Your profile information has been updated successfully.",
      });
    }
    setIsEditing(!isEditing);
  };

  const handleBankEditToggle = () => {
    if (isBankEditing) {
      // Save changes
      setBankDetails({ ...tempBankDetails });
      toast({
        title: "Bank details updated",
        description: "Your bank details have been updated successfully.",
      });
    }
    setIsBankEditing(!isBankEditing);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTempUser({
      ...tempUser,
      [e.target.name]: e.target.value
    });
  };

  const handleBankInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setTempBankDetails({
      ...tempBankDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleCancel = () => {
    setTempUser({ ...user });
    setIsEditing(false);
  };

  const handleBankCancel = () => {
    setTempBankDetails({ ...bankDetails });
    setIsBankEditing(false);
  };

  const handleChangePassword = () => {
    toast({
      title: "Password reset email sent",
      description: "Check your email for instructions to reset your password.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">User Profile</h1>
        <p className="text-muted-foreground">View and manage your profile information</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="bank">Bank Details</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Update your personal details and information
                  </CardDescription>
                </div>
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-guiitar-primary text-xl font-semibold text-white">
                    {user.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  {isEditing ? (
                    <Input 
                      id="name" 
                      name="name" 
                      value={tempUser.name} 
                      onChange={handleInputChange} 
                    />
                  ) : (
                    <div className="p-2 border rounded-md bg-gray-50">{user.name}</div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="p-2 border rounded-md bg-gray-50">{user.email}</div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="institution">Institution</Label>
                  {isEditing ? (
                    <Input 
                      id="institution" 
                      name="institution" 
                      value={tempUser.institution} 
                      onChange={handleInputChange} 
                    />
                  ) : (
                    <div className="p-2 border rounded-md bg-gray-50">{user.institution}</div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="position">Position</Label>
                  {isEditing ? (
                    <Input 
                      id="position" 
                      name="position" 
                      value={tempUser.position} 
                      onChange={handleInputChange} 
                    />
                  ) : (
                    <div className="p-2 border rounded-md bg-gray-50">{user.position}</div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  {isEditing ? (
                    <Input 
                      id="phone" 
                      name="phone" 
                      value={tempUser.phone} 
                      onChange={handleInputChange} 
                    />
                  ) : (
                    <div className="p-2 border rounded-md bg-gray-50">{user.phone}</div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  {isEditing ? (
                    <Input 
                      id="address" 
                      name="address" 
                      value={tempUser.address} 
                      onChange={handleInputChange} 
                    />
                  ) : (
                    <div className="p-2 border rounded-md bg-gray-50">{user.address}</div>
                  )}
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="bio">Bio</Label>
                  {isEditing ? (
                    <textarea 
                      id="bio" 
                      name="bio" 
                      rows={3}
                      className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      value={tempUser.bio} 
                      onChange={handleInputChange} 
                    />
                  ) : (
                    <div className="p-2 border rounded-md bg-gray-50 min-h-[80px]">{user.bio}</div>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              {isEditing && (
                <Button variant="ghost" onClick={handleCancel}>
                  Cancel
                </Button>
              )}
              <Button 
                onClick={handleEditToggle} 
                className={isEditing ? "bg-green-600 hover:bg-green-700" : "bg-guiitar-primary hover:bg-guiitar-primary/90"}
              >
                {isEditing ? "Save Changes" : "Edit Profile"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="bank" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Bank Details</CardTitle>
              <CardDescription>
                Manage your bank account information for fund transfers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="accountHolderName">Account Holder Name</Label>
                  {isBankEditing ? (
                    <Input 
                      id="accountHolderName" 
                      name="accountHolderName" 
                      value={tempBankDetails.accountHolderName} 
                      onChange={handleBankInputChange} 
                    />
                  ) : (
                    <div className="p-2 border rounded-md bg-gray-50">{bankDetails.accountHolderName}</div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="accountNumber">Account Number</Label>
                  {isBankEditing ? (
                    <Input 
                      id="accountNumber" 
                      name="accountNumber" 
                      value={tempBankDetails.accountNumber} 
                      onChange={handleBankInputChange} 
                    />
                  ) : (
                    <div className="p-2 border rounded-md bg-gray-50">****{bankDetails.accountNumber.slice(-4)}</div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bankName">Bank Name</Label>
                  {isBankEditing ? (
                    <Input 
                      id="bankName" 
                      name="bankName" 
                      value={tempBankDetails.bankName} 
                      onChange={handleBankInputChange} 
                    />
                  ) : (
                    <div className="p-2 border rounded-md bg-gray-50">{bankDetails.bankName}</div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="ifscCode">IFSC Code</Label>
                  {isBankEditing ? (
                    <Input 
                      id="ifscCode" 
                      name="ifscCode" 
                      value={tempBankDetails.ifscCode} 
                      onChange={handleBankInputChange} 
                    />
                  ) : (
                    <div className="p-2 border rounded-md bg-gray-50">{bankDetails.ifscCode}</div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="branchName">Branch Name</Label>
                  {isBankEditing ? (
                    <Input 
                      id="branchName" 
                      name="branchName" 
                      value={tempBankDetails.branchName} 
                      onChange={handleBankInputChange} 
                    />
                  ) : (
                    <div className="p-2 border rounded-md bg-gray-50">{bankDetails.branchName}</div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="accountType">Account Type</Label>
                  {isBankEditing ? (
                    <select 
                      id="accountType" 
                      name="accountType" 
                      value={tempBankDetails.accountType} 
                      onChange={handleBankInputChange}
                      className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="Savings">Savings</option>
                      <option value="Current">Current</option>
                    </select>
                  ) : (
                    <div className="p-2 border rounded-md bg-gray-50">{bankDetails.accountType}</div>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              {isBankEditing && (
                <Button variant="ghost" onClick={handleBankCancel}>
                  Cancel
                </Button>
              )}
              <Button 
                onClick={handleBankEditToggle} 
                className={isBankEditing ? "bg-green-600 hover:bg-green-700" : "bg-guiitar-primary hover:bg-guiitar-primary/90"}
              >
                {isBankEditing ? "Save Changes" : "Edit Bank Details"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Manage your account security and password
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Password</Label>
                <div className="p-2 border rounded-md bg-gray-50">••••••••</div>
              </div>
              
              <div className="space-y-2">
                <Label>Two-Factor Authentication</Label>
                <div className="p-2 border rounded-md bg-gray-50 text-yellow-600">Not enabled</div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Button 
                onClick={handleChangePassword} 
                className="bg-guiitar-primary hover:bg-guiitar-primary/90"
              >
                Change Password
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
