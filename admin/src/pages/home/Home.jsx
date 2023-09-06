import  '../home/Home.css'
import FeatureInfo from '../../components/featureInfo/FeatureInfo.jsx'
import Chart from '../../components/chart/Chart.jsx'
import { UserData } from '../../DummyData'
import WidgetLg from '../../components/widgetlg/WidgetLg'
import WidgetSm from '../../components/widget/WidgetSm'


const Home = () => {
  return (
    <div className='home'>
        <FeatureInfo/>
        <Chart data={UserData} title="User Analytics" grid="grid" dataKey="Active Users" />
        <div className="homeWidgets"><WidgetSm/><WidgetLg/></div>
    </div>
  )
}

export default Home