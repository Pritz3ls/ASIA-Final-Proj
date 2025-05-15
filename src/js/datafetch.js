function RetrieveSampleData(){
    fetch('http://localhost:3000/api/sales')
      .then(res => res.json())
      .then(data => {
        const data = data.map(item => item.product);
        return res;
    });
}