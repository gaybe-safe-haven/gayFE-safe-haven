export default function RateForm() {
  return (
  <form>
    <div>
      <input type="range" id="staff" name="staff" min="0" max="10"/>
      <label for="staff"><img src="/flag.png" alt="lgbtq flag icon"/></label>
    </div>
    <div>
      <input type="range" id="safety" name="safety" min="0" max="10"/>
      <label for="staff"><img src="/home.png" alt="safe house icon"/></label>
    </div>
    <div>
      <input type="range" id="clean" name="clean" min="0" max="10"/>
      <label for="staff"><img src="/mop.png" alt="mop icon"/></label>
    </div>
    <p>Please only submit a rating if you have stayed at this shelter.</p> 
    <p>This is community-driven information and we trust you to accurately report your experience.</p>
    <button>submit review</button>
  </form>
  )
}