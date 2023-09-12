import './App.css'
import Switch from './components/Switch/Switch'

function App() {
  return (
    <>
      <Switch
        id='test'
        stem_color='237,237,54'
        stem_type='standard'
        stem_construction='standard'
        housing_top_type='transparent'
        housing_top_color='255,177,228'
        housing_bottom_type='transparent'
        housing_bottom_color='179,131,226'
        mount={5}
      />
      <Switch
        id='test'
        stem_color='237,237,54'
        stem_type='standard'
        stem_construction='cap'
        housing_top_type='transparent'
        housing_top_color='255,177,228'
        housing_bottom_type='transparent'
        housing_bottom_color='179,131,226'
        mount={5}
      />
    </>
  )
}

export default App
