import "./dashboard.css"


export default function Dashboard() {

    return (<>
        <>
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                rel="stylesheet"
            />
            <div className="container py-4">
                {/* Header Section */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h1 className="h3 mb-0">Dashboard Overview</h1>
                        <p className="text-muted small mb-0">Welcome back, Admin</p>
                    </div>
                    <div className="d-flex gap-2">
                        <button className="btn btn-outline-primary btn-sm">
                            <i className="fas fa-bell me-1" /> Notifications
                        </button>
                        <button className="btn btn-primary btn-sm">
                            <i className="fas fa-plus me-1" /> New Project
                        </button>
                    </div>
                </div>
                {/* Stats Cards Row */}
                <div className="row g-3 mb-4">
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 className="text-muted mb-2">Total Users</h6>
                                        <h3 className="mb-0">8,549</h3>
                                        <small className="text-success">
                                            <i className="fas fa-arrow-up me-1" />
                                            12.5%
                                        </small>
                                    </div>
                                    <div className="bg-primary bg-opacity-10 p-3 rounded">
                                        <i className="fas fa-users text-primary" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 className="text-muted mb-2">Revenue</h6>
                                        <h3 className="mb-0">$24,890</h3>
                                        <small className="text-success">
                                            <i className="fas fa-arrow-up me-1" />
                                            8.2%
                                        </small>
                                    </div>
                                    <div className="bg-success bg-opacity-10 p-3 rounded">
                                        <i className="fas fa-dollar-sign text-success" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 className="text-muted mb-2">Orders</h6>
                                        <h3 className="mb-0">1,236</h3>
                                        <small className="text-danger">
                                            <i className="fas fa-arrow-down me-1" />
                                            3.1%
                                        </small>
                                    </div>
                                    <div className="bg-warning bg-opacity-10 p-3 rounded">
                                        <i className="fas fa-shopping-cart text-warning" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h6 className="text-muted mb-2">Growth</h6>
                                        <h3 className="mb-0">15.3%</h3>
                                        <small className="text-success">
                                            <i className="fas fa-arrow-up me-1" />
                                            5.8%
                                        </small>
                                    </div>
                                    <div className="bg-info bg-opacity-10 p-3 rounded">
                                        <i className="fas fa-chart-line text-info" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main Content Area */}
                <div className="row g-3">
                    {/* Activity Timeline */}
                    <div className="col-12 col-lg-8">
                        <div className="card border-0 shadow-sm">
                            <div className="card-header bg-white border-0">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="mb-0">Recent Activity</h5>
                                    <button className="btn btn-link text-decoration-none p-0">
                                        View All
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="timeline">
                                    <div className="d-flex mb-3">
                                        <div className="flex-shrink-0">
                                            <div className="bg-primary bg-opacity-10 p-2 rounded">
                                                <i className="fas fa-user-plus text-primary" />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="mb-1">New user registered</h6>
                                            <p className="text-muted small mb-0">2 minutes ago</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <div className="flex-shrink-0">
                                            <div className="bg-success bg-opacity-10 p-2 rounded">
                                                <i className="fas fa-check text-success" />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="mb-1">Project milestone completed</h6>
                                            <p className="text-muted small mb-0">1 hour ago</p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="flex-shrink-0">
                                            <div className="bg-warning bg-opacity-10 p-2 rounded">
                                                <i className="fas fa-bell text-warning" />
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h6 className="mb-1">New feature release</h6>
                                            <p className="text-muted small mb-0">2 hours ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Quick Actions */}
                    <div className="col-12 col-lg-4">
                        <div className="card border-0 shadow-sm">
                            <div className="card-header bg-white border-0">
                                <h5 className="mb-0">Quick Actions</h5>
                            </div>
                            <div className="card-body">
                                <div className="d-grid gap-2">
                                    <button className="btn btn-outline-primary">
                                        <i className="fas fa-plus me-2" />
                                        Add New Project
                                    </button>
                                    <button className="btn btn-outline-success">
                                        <i className="fas fa-users me-2" />
                                        Manage Team
                                    </button>
                                    <button className="btn btn-outline-info">
                                        <i className="fas fa-cog me-2" />
                                        Settings
                                    </button>
                                    <button className="btn btn-outline-warning">
                                        <i className="fas fa-file-alt me-2" />
                                        Generate Report
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


        <>
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                rel="stylesheet"
            />
            <div className="container py-4">
                <h1 className="text-center mb-4">Data Visualization Dashboard</h1>
                <div className="row">
                    <div className="col-md-3">
                        <div className="dashboard-card weather-widget">
                            <div className="weather-icon">
                                <i className="fas fa-sun" />
                            </div>
                            <div className="weather-temp">25°C</div>
                            <div className="weather-description">Sunny</div>
                            <div className="weather-location">New York, NY</div>
                        </div>
                        <div className="dashboard-card">
                            <h3>Quick Stats</h3>
                            <div className="row">
                                <div className="col-6 mb-3">
                                    <div className="stat-card">
                                        <div className="stat-icon text-primary">
                                            <i className="fas fa-users" />
                                        </div>
                                        <div className="stat-value">1,234</div>
                                        <div className="stat-label">Total Users</div>
                                    </div>
                                </div>
                                <div className="col-6 mb-3">
                                    <div className="stat-card">
                                        <div className="stat-icon text-success">
                                            <i className="fas fa-shopping-cart" />
                                        </div>
                                        <div className="stat-value">$5,678</div>
                                        <div className="stat-label">Revenue</div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="stat-card">
                                        <div className="stat-icon text-info">
                                            <i className="fas fa-file-alt" />
                                        </div>
                                        <div className="stat-value">42</div>
                                        <div className="stat-label">New Posts</div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="stat-card">
                                        <div className="stat-icon text-warning">
                                            <i className="fas fa-star" />
                                        </div>
                                        <div className="stat-value">4.7</div>
                                        <div className="stat-label">Avg. Rating</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="dashboard-card">
                            <h3>Monthly Revenue</h3>
                            <canvas id="revenueChart" />
                        </div>
                        <div className="dashboard-card">
                            <h3>User Demographics</h3>
                            <canvas id="demographicsChart" />
                        </div>
                    </div>
                </div>
            </div>
        </>


    </>)
}