import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TourPlaces from './components/TourPlaces'

import './App.css'

// Replace your code here
class App extends Component {
  state = {tourPackages: [], isLoading: false}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({isLoading: true})
    const apiUrl = ' https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const updatedData = data.packages.map(each => ({
      id: each.id,
      name: each.name,
      imageUrl: each.image_url,
      description: each.description,
    }))
    this.setState({tourPackages: updatedData, isLoading: false})
  }

  renderPlaces = () => {
    const {tourPackages} = this.state
    return (
      <ul className="ul">
        {tourPackages.map(each => (
          <TourPlaces key={each.id} tourlist={each} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app">
        <h1 className="heading">Travel Guide</h1>
        <div className="inner-container">
          {isLoading ? this.renderLoader() : this.renderPlaces()}
        </div>
      </div>
    )
  }
}
export default App
