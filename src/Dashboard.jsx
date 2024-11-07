import React, { useState } from 'react';
import { Bell, Settings, Search, ChevronRight, User, Users, FileText, MessageSquare, Menu } from 'lucide-react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Drawer, List, ListItem, ListItemIcon, ListItemText, Card, CardContent, Avatar, Button, Grid, Container, useMediaQuery, useTheme , Box} from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../src/assets/logo.svg';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';

// Navbar Component
const Navbar = ({ toggleSidebar }) => (
  <AppBar position="fixed" sx={{ backgroundColor: 'white', color: 'black', borderBottom: '1px solid #e0e0e0' }}>
    <Toolbar>
      <IconButton edge="start" color="inherit" onClick={toggleSidebar} sx={{ display: { md: 'none' } }}>
        <Menu />
      </IconButton>
      <div className="d-flex align-items-center ms-2 me-auto">
        <Avatar sx={{ backgroundColor: 'blue' }}>V</Avatar>
        <Typography variant="h6" sx={{ ml: 1 }}>Vesilium</Typography>
      </div>
      <div className="d-none d-md-flex mx-4" style={{ flex: 1, maxWidth: '400px' }}>
        <div className="position-relative w-100">
          <Search className="position-absolute" style={{ top: '50%', left: '8px', transform: 'translateY(-50%)', color: 'gray' }} />
          <InputBase
            placeholder="Search..."
            fullWidth
            sx={{
              padding: '4px 8px 4px 32px',
              borderRadius: '8px',
              backgroundColor: '#f1f3f4',
              color: '#333',
            }}
          />
        </div>
      </div>
      <div className="d-flex align-items-center">
        <IconButton><Bell /></IconButton>
        <IconButton><Settings /></IconButton>
        <Avatar src="/api/placeholder/32/32" alt="Profile" />
        <Typography sx={{ ml: 1, display: { xs: 'none', md: 'block' } }}>John Doe</Typography>
      </div>
    </Toolbar>
  </AppBar>
);

// Sidebar Component
const Sidebar = ({ open, toggleSidebar }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));  // Detect screen size

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={open}
      onClose={toggleSidebar}
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >

<Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: theme.spacing(2),
          borderBottom: `1px solid ${theme.palette.divider}`,
          marginBottom: theme.spacing(2),
        }}
      >
        <img src="../src/assets/logo.svg" alt="Company Logo" style={{ height: 50, marginRight: theme.spacing(1) }} />
        {/* <Typography variant="h6" noWrap>
          Vasitum
        </Typography> */}
      </Box>
      <Typography variant="caption" sx={{ paddingLeft: theme.spacing(2), color: theme.palette.text.secondary }}>
        MAIN MENU
      </Typography>
      <List>
        <ListItem button>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><User /></ListItemIcon>
          <ListItemText primary="Recruitment" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><FileText /></ListItemIcon>
          <ListItemText primary="Schedule" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Users /></ListItemIcon>
          <ListItemText primary="Employee" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><MessageSquare /></ListItemIcon>
          <ListItemText primary="Department" />
        </ListItem>
      </List>

      <Typography variant="caption" sx={{ paddingLeft: theme.spacing(2), color: theme.palette.text.secondary }}>
        Other
      </Typography>

      <List>
        <ListItem button>
          <ListItemIcon><HeadphonesIcon /></ListItemIcon>
          <ListItemText primary="Support" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
};

// Stat Card Component
const StatCard = ({ title, count, trend, subtitle, bgColor }) => (
  <Card className="mb-3" sx={{ backgroundColor: bgColor }}>
    <CardContent>
      <Typography variant="subtitle2">{title}</Typography>
      <div className="d-flex align-items-center justify-content-between">
        <Typography variant="h5">{count}</Typography>
        <div className="d-flex align-items-center" style={{ color: 'red', fontSize: '0.875rem' }}>
          <span>{trend}</span>
        </div>
      </div>
      <Typography variant="caption" color="textSecondary">{subtitle}</Typography>
    </CardContent>
  </Card>
);

// Announcement Component
const Announcement = ({ title, time }) => (
  <div className="d-flex justify-content-between py-2">
    <Typography variant="body2">{title}</Typography>
    <Typography variant="caption" color="textSecondary">{time}</Typography>
  </div>
);

// Schedule Item Component
const ScheduleItem = ({ title, time }) => (
  <div className="d-flex justify-content-between py-2">
    <div>
      <Typography variant="body2">{title}</Typography>
      <Typography variant="caption" color="textSecondary">{time}</Typography>
    </div>
    <ChevronRight className="text-muted" />
  </div>
);

// Main Dashboard Component
const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div style={{ flex: 1 }}>
        <Navbar toggleSidebar={toggleSidebar} />
        <Container sx={{ marginTop: '64px', marginLeft: sidebarOpen ? '240px' : '0', transition: 'margin-left 0.3s' }}>
          {/* Stats and Recent Activity Container */}
          <Grid container spacing={3} className="mt-4">
            <Grid item xs={12} md={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <StatCard title="Available Position" count="24" trend="+5" subtitle="4 urgently needed" bgColor="#fbe8e8" />
                </Grid>
                <Grid item xs={12} md={4}>
                  <StatCard title="Job Open" count="10" trend="+2" subtitle="4 actively hiring" bgColor="#e8f0fb" />
                </Grid>
                <Grid item xs={12} md={4}>
                  <StatCard title="New Employees" count="24" trend="+3" subtitle="4 department" bgColor="#f3e8fb" />
                </Grid>
              </Grid>

              <Grid container spacing={3} className="mt-4">
                <Grid item xs={12} md={6}>
                  <Card className="p-3">
                    <Typography variant="h6">Total Employees</Typography>
                    <Typography variant="h4" color="primary">216</Typography>
                    <Typography variant="caption" color="textSecondary">+15% this month</Typography>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card className="p-3">
                    <Typography variant="h6">Talent Request</Typography>
                    <Typography variant="h4" color="primary">16</Typography>
                    <Typography variant="caption" color="textSecondary">+32% this month</Typography>
                  </Card>
                </Grid>
              </Grid>

              {/* Announcements Section */}
              <Grid container spacing={3} className="mt-4">
                <Grid item xs={12}>
                  <Card className="p-3">
                    <Typography variant="h6">Announcement</Typography>
                    <Announcement title="Outing schedule for every department" time="Today, 13:30" />
                    <Announcement title="Meeting HR Department" time="Today, 14:30" />
                    <Announcement title="IT Department needs two more talents for UI/UX Designer position" time="Tomorrow, 10:00" />
                    <Button color="primary">See All Announcements</Button>
                  </Card>
                </Grid>
              </Grid>
            </Grid>

            {/* Recent Activity Section */}
            <Grid item xs={12} md={4}>
              <Card className="p-3" sx={{ backgroundColor: '#0d47a1', color: 'white' }}>
                <Typography variant="h6">Recent Activity</Typography>
                <Typography variant="body2">You Posted a New Job</Typography>
                <Typography variant="caption">10:40 AM, Fri 10 Sept 2021</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>Kindly check the requirements and terms of work and make sure everything is right.</Typography>
                <Button variant="contained" color="secondary" sx={{ mt: 2 }}>See All Activity</Button>
              </Card>

              {/* Upcoming Schedule Section */}
              <Card className="p-3 mt-3">
                <Typography variant="h6">Upcoming Schedule</Typography>
                <ScheduleItem title="Review candidate applications" time="Today, 11:30 AM" />
                <ScheduleItem title="Interview with candidates" time="Today, 14:30 PM" />
                <ScheduleItem title="Short meeting with product designer from IT Department" time="Tomorrow, 09:15 AM" />
                <Button color="primary">Create a New Schedule</Button>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
    