import DashboardLayout from "layouts/dashboard/dashboard";
import Header from "components/header/header";
import ModelResults from "./model-results/model-results";

const Dashboard: React.FC = () => {
    return (
        <DashboardLayout>
            <Header 
            items={[
                {
                  key: "1",
                  label: `Building data`,
                  children: `Content of Tab Pane 1`,
                },
                {
                  key: "2",
                  label: `Model results`,
                  children: <ModelResults />
                },
                {
                  key: "3",
                  label: `Portfolio Settings`,
                  children: `Content of Tab Pane 3`,
                },
              ]}/>
        </DashboardLayout>
    )
}

export default Dashboard