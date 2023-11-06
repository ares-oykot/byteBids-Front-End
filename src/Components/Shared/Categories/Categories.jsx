import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GraphicsDesign from './GraphicsDesign';
import WebDevelopment from './WebDevelopment';
import DigitalMarketing from './DigitalMarketing';
const Categories = () => {
    return (
        <Tabs className="max-w-screen-xl mx-auto">
            <TabList className="text-center">
                <Tab>Web Development</Tab>
                <Tab>Digital Marketing</Tab>
                <Tab>Graphics Design</Tab>
            </TabList>

            <TabPanel>
                <WebDevelopment></WebDevelopment>
            </TabPanel>
            <TabPanel>
                <DigitalMarketing></DigitalMarketing>
            </TabPanel>
            <TabPanel>
                <GraphicsDesign></GraphicsDesign>
            </TabPanel>
        </Tabs>
    );
};

export default Categories;