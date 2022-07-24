export async function getImages() {
  return await fetch(
    'https://pixabay.com/api/?key=28157961-50aacf6d1ff0efe2e77cab6d2&q=yellow+flowers&image_type=photo'
  )
    .then(res => {
      return res.json();
    })
    .then(data => {
		 console.log(data);
		 return data;
    });
}
