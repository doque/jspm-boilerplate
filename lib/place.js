class Place {
  locate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) =>
        console.log(`located: lat ${pos.coords.latitude}, lng ${pos.coords.longitude}`)
      );
    }
  }
}

export default new Place()