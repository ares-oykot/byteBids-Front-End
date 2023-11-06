import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GraphicsDesign from './GraphicsDesign';
import WebDevelopment from './WebDevelopment';
import DigitalMarketing from './DigitalMarketing';

const Categories = () => {
    return (
        <Tabs className="max-w-screen-xl mx-2 md:mx-auto">
            <h1 className='text-center text-3xl md:text-4xl my-2 md:my-3 font-black'>Our Jobs Categories</h1>
            <TabList className="text-center font-bold text-[9px] md:text-base">
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