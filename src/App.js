
import './App.css';
import img from './assets/img.jpg'
import world from './assets/world.jpg'

function App() {
  return (
    <div className="App">
      <div className='Hello'>
      <p> Places States </p>
      </div>
     <div className='Hello1'>
      <p className='fame'> Profile Check</p>
      <div className='pix'>
        <img src={img} width ="80" height ="45" alt='person'/>
      </div>
      <p>Fullname: Subin Bista   </p>
      <p>Birthplace:Nepal</p>
      <p>Email:bistasubeen715@gmail.com</p>
      </div>
      <div className='whole'>
        <header className='editi'> Travel Check</header>
        <div className='edits'>
          <img src={world} height="300" width="380" alt="vacation" />
        </div>
        <div className='Tables'>
        <table>
          <tr>
            <th>State</th>
            <th>Place</th>
            <th> Visited</th>
            <th> Planning</th>
          </tr>
          <tr>
            <td>Lousiana</td>
            <td>New Orleans</td>
            <td>Yes</td>
            <td></td>
          </tr>
          <tr>
            <td>Lousiana</td>
            <td>Monroe</td>
            <td>No</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Texas</td>
            <td>Austin</td>
            <td>No</td>
            <td>No</td>
          </tr>
          <tr>
            <td>NewYork</td>
            <td>NewYork City</td>
            <td>yes</td>
            <td></td>
          </tr>
        </table>
        </div>
        
        </div>
       

        <div className='editos'>
        <p>
          Connection Check
        </p>
        </div>
        <div className='forum'> <Forms/></div>
        <footer className='end'>
          copyright@Subin. All rights reserved.
        </footer>
     </div>
     
    
  );
}
const Forms =()=>{
  return(
<form>
  <label>Name
    <input type="text"/>
  </label> <br></br>
  <label>Email
    <input type="text"/>
  </label> <br></br>
 < label>Contact
    <input type="number"/>
  </label>
  <label> <br></br>
    Message:
    <textarea height="500" width="600">
    </textarea>
  </label>
  <input type="submit" name="submit"></input>
</form>

  )
}

export default App;
