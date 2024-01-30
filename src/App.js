import Nav from './components/Nav';
import './styles.css'

function App() {
  return (
    <section id='hero-section'>
      <section className='hero-overlay'>
        
      
        <section className='hero-content'>
          <Nav/>
          
          <div className='model-info-div'>
            <h1 className='model'>Model 3</h1>
            <p className='lease-info'>Lease Starting at $329/mo*</p>
          </div>

          <div className='model-data'>
            <div className='stats-div'>
              <div>
                <h4>15 min</h4>
                <p>Recharge up to 175 miles</p>
              </div>
              <div>
                <h4>341 mi</h4>
                <p>Range (EPA est.)</p>
              </div>
              <div>
                <h4>AWD</h4>
                <p>Dual motor</p>
              </div>
            </div>
            <div className='order-div'>
              <h4>Create your Model 3</h4>
              <div className='order-btn'>
                Custom Order
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

export default App;
