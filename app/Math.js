class Rectangle {
    static measurementRectangle (latitude,longitude) {
       return latitude * longitude
    }

    static ambianceRectangle (latitude,longitude) {
        return (latitude * longitude) + 2
    }

    static rectangularCubeVolume (latitude,longitude,height) {
        return (latitude * longitude * height)
    }
}

