import { useState, useEffect } from 'react';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarFooter,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent
} from "@/components/ui/sidebar";
import { 
  File, 
  Plus, 
  User, 
  Users, 
  LogOut, 
  ChartLine, 
  Menu, 
  FileText,
  MessageSquare,
  LayoutDashboard,
  ChevronRight
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const location = useLocation();
  const [userName, setUserName] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    if (email) {
      const name = email.split('@')[0];
      setUserName(name.charAt(0).toUpperCase() + name.slice(1));
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    toast({
      title: "Logged out successfully",
      description: "You have been logged out from your account.",
    });
    navigate('/');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter(x => x);
    const breadcrumbs = [{ name: 'Dashboard', path: '/dashboard' }];

    if (pathnames.length > 1) {
      let currentPath = '/dashboard';
      pathnames.slice(1).forEach((segment) => {
        currentPath += `/${segment}`;
        const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
        breadcrumbs.push({ name, path: currentPath });
      });
    }

    return breadcrumbs;
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full bg-gray-50">
        <Sidebar 
          variant="inset" 
          className={`transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-0'} ${isMobile && !isSidebarOpen ? 'hidden' : 'block'}`}
        >
          <SidebarHeader>
            <div className="flex items-center px-2">
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-guiitar-primary font-serif font-bold text-xl">GUIITAR</span>
                <span className="text-guiitar-accent font-serif font-bold text-xl">COUNCIL</span>
              </Link>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Dashboard">
                      <Link to="/dashboard">
                        <LayoutDashboard />
                        <span>Dashboard</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="New Application">
                      <Link to="/dashboard/applications/new">
                        <Plus />
                        <span>New Application</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="My Profile">
                      <Link to="/dashboard/profile">
                        <User />
                        <span>My Profile</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="File a Grievance">
                      <Link to="/dashboard/grievance">
                        <MessageSquare />
                        <span>File a Grievance</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <div className="px-2 py-4">
              <div className="flex justify-between items-center mb-4 px-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-guiitar-primary text-white rounded-full flex items-center justify-center mr-2">
                    {userName.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{userName}</p>
                    <p className="text-xs text-muted-foreground">{localStorage.getItem('userEmail')}</p>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2 border-red-300 hover:bg-red-50 hover:text-red-600 transition-colors"
                onClick={handleLogout}
              >
                <LogOut size={16} />
                <span>Logout</span>
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <div className={`flex-1 overflow-auto transition-all duration-300 ${isSidebarOpen && !isMobile ? 'ml-64' : 'ml-0'}`}>
          <header className="bg-white border-b h-14 flex items-center justify-between px-6">
            <div className="flex items-center">
              <SidebarTrigger onClick={toggleSidebar} className="mr-2" />
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                {generateBreadcrumbs().map((crumb, index) => (
                  <div key={crumb.path} className="flex items-center">
                    {index > 0 && <ChevronRight className="h-4 w-4 mx-1" />}
                    {index === generateBreadcrumbs().length - 1 ? (
                      <span className="text-foreground font-medium">{crumb.name}</span>
                    ) : (
                      <Link to={crumb.path} className="hover:text-foreground">{crumb.name}</Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-guiitar-primary text-white">
                        {userName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden md:inline">{userName}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-guiitar-primary text-white">
                      {userName.charAt(0)}
                    </div>
                    <div className="flex flex-col space-y-0.5">
                      <p className="text-sm font-medium">{userName}</p>
                      <p className="text-xs text-muted-foreground">{localStorage.getItem('userEmail')}</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard/profile" className="cursor-pointer flex w-full items-center">
                      <User className="mr-2 h-4 w-4" />
                      <span>View Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600 focus:text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          
          <main className="p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;