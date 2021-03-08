import './App.css';
import Header from './components/Header';
import Item from './components/Item';
import Accessories from './assets/Desktop-Accessories.jpg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelS from './assets/Desktop-ModelS.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanels from './assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';


const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="app-items-container">
        <Item
            title='Lowest Cost Solar Panels in America'
            desc='Money-back guarantee'
            descLink=''
            backgroundImg={SolarPanels}
            leftBtnTxt='ORDER NOW'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
            twoButtons='true'
            first
        />
        <Item
            title='ModelS'
            desc='$69,420'
            descLink=''
            backgroundImg={ModelS}
            leftBtnTxt='CUSTOM ORDER'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
            twoButtons='true'
        />
        <Item
            title='Model3'
            desc='Money-back guarantee'
            descLink=''
            backgroundImg={Model3}
            leftBtnTxt='CUSTOM ORDER'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
            twoButtons='true'
        />
        <Item
            title='ModelX'
            desc='Money-back guarantee'
            descLink=''
            backgroundImg={ModelX}
            leftBtnTxt='CUSTOM ORDER'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
            twoButtons='true'
        />
        <Item
            title='ModelY'
            desc='Money-back guarantee'
            descLink=''
            backgroundImg={ModelY}
            leftBtnTxt='CUSTOM ORDER'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
            twoButtons='true'
        />
        <Item
            title='Accessories'
            desc='Money-back guarantee'
            descLink=''
            backgroundImg={Accessories}
            leftBtnTxt='SHOP NOW'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
            twoButtons='false'

        />
      </div>
    </div>
  );
}

export default App;
