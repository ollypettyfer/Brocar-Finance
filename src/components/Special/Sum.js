// import React, { Component } from "react";

// class Sum extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { Num1: "", Num2: "" };
//   }

//   Add = () => {
//     let n1 = parseInt(this.state.Num1);
//     let n2 = parseInt(this.state.Num2);

//     let intrest = (n1 / 100) * 3.7; //current intrest rate
//     let total = intrest * n2;
//     let addTotal = total + n1;
//     let grandTotal = addTotal / n2;
//     alert(grandTotal);

//     //could also put in amount of intrest paying mayb?
//   };
//   render() {
//     return (
//       <section className="section">
//         <form className="form">
//           <label className="label">AMOUNT</label>
//           <input
//             className="input"
//             type="text"
//             onChange={(e) => this.setState({ Num1: e.target.value })}
//             value={this.state.Num1}
//             placeholder="£10,000"
//           />
//           <label className="label">MONTHS</label>
//           <input
//             className="input"
//             type="text"
//             onChange={(e) => this.setState({ Num2: e.target.value })}
//             value={this.state.Num2}
//             placeholder="YEARS"
//           />

//           <label className="label">Total Repayment</label>
//           <textarea className="textarea is-small" type="text"></textarea>
//           <button className="button" title="Add" onClick={this.Add}>
//             Calculate
//           </button>
//         </form>
//       </section>
//     );
//   }
// }
// export default Sum;
