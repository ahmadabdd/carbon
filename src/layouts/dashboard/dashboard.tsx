import Navbar from "../../components/navbar/navbar"

const DashboardLayout = ({ children }: React.HTMLAttributes<HTMLDivElement> ) => {
    return (
        <div className="dashboard">
            <Navbar />
            {children}
        </div>
    )
}

export default DashboardLayout