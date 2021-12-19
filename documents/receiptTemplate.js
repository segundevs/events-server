module.exports = ({ email, amount, status, type }) => {
  const today = new Date();
  return `
    <!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <title>PDF Result Template</title>
  <style>
    .invoice-box {
      max-width: 350px;
      margin: auto;
      padding: 30px;
      border: 1px solid #eee;
      box-shadow: 0 0 10px rgba(0, 0, 0, .15);
      font-size: 16px;
      line-height: 24px;
      font-family: 'Courier New', Courier, monospace;
      color: #555;
    }

    .logo {
      background-color: #0a014a;
      color: #ffe275;
      width: 100px;
      height: 100px;
    }

    h2 {
      padding-top: 40px;
      padding-left: 40px;
      font-weight: 900;
      font-size: 50px;
    }

    .justify-center {
      text-align: center;
    }

    .invoice-box table {
      width: 100%;
      line-height: inherit;
      text-align: left;
    }


    .invoice-box table tr.heading td {
      background: #eee;
      border-bottom: 1px solid #ddd;
      font-weight: bold;
    }

    .invoice-box table tr.item td {
      border-bottom: 1px solid #eee;
    }

  </style>
</head>

<body>
  <div class="invoice-box">

  <h3 class="justify-center">Your Receipt</h3>
  <br />

    <div class="details_container">
      <div class="logo">
        <h2>E</h2>
      </div>

      <div class="details">
        <h4>Date: ${`${today.getDate()} - ${
          today.getMonth() + 1
        } - ${today.getFullYear()}`}</h4>
        <h4>Email: <span>${email}</span></h4>
        <h4>Type: <span>${type}</span></h4>
        <h4>Status: <span>${status}</span></h4>
      </div>
    </div>
    
      <table>
      <tr class="heading">
        <td>Bought items:</td>
        <td>Price</td>
      </tr>
      <tr class="item">
        <td>Ticket:</td>
        <td>${parseInt(amount)}0$</td>
      </tr>
      </table>
    
    <br />
    <h3 class="justify-center">Total price: ${parseInt(amount)}0$</h3>
  </div>
</body>
</html>
    `;
};
