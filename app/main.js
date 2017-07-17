var AlbumStore = function() {
  "use strict";
  console.log("Album Store Object");
  this.photoIdCounter = 0;
  this.photos = [{
    id: 2,
    description: 'My Dog',
    url: 'http://mysite.com/dog'
  }, {
    id: 1,
    description: 'My Cat',
    url: 'http://mysite.com/cat'
  }, {
    id: 3,
    description: 'My Dinosaur',
    url: 'http://mysite.com/dinosaur'
  }];
  this.isArray = function() {
    if (typeof this.photos === "object" && this.photos.length >= 0) {
      return true;
    } else {
      return false;
    }
  }
};

AlbumStore.prototype.add = function(_photoObj) {
  console.log("Add method called : ");
  if (this.isArray()) {
    if (this.photos.length <= 0) {
      _photoObj.id = this.photoIdCounter + 1;
      this.photos.push(_photoObj);
    } else {
      var sorted = _.sortBy(this.photos, "id");
      this.photoIdCounter = sorted[sorted.length - 1].id + 1;
      _photoObj.id = this.photoIdCounter;
      sorted.push(_photoObj);
      this.photos = _.cloneDeep(sorted);
    }
    return this.photos;
  }
}


AlbumStore.prototype.get = function(_id) {
  if (this.isArray()) {
    var res = this.photos.find(function(photo) {
      if (photo.id === _id) {
        return photo;
      }
    });
    return res;
  } else {
    return {
      "err": "Your source object is not vallid",
      "err1": "It supports only type of Array"
    };
  }
};

AlbumStore.prototype.remove = function(_id) {
  console.log("Remove Method Called : ", _id);
  this.photos.map(function(value, index) {
    if (value.id === _id) {
      this.photos.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }.bind(this));
};

AlbumStore.prototype.edit = function(_photoObj) {
  console.log("Edit Method Called : ", _photoObj);
  var foundObj = this.get(_photoObj.id);
  if (!foundObj || foundObj === undefined) {
    return false;
  }
  Object.assign(foundObj, _photoObj);
};

AlbumStore.prototype.search = function(_term) {
  console.log("Find Method Called : ", _term);
  var foundArr = [];
  var res = this.photos.find(function(photo) {
    var ind = ((photo.description).toLowerCase()).indexOf(_term.toLowerCase())
    if (ind >= 0) {
      foundArr.push(photo);
    }
  });
  return foundArr;
};
var store = new AlbumStore();
// var dummyObj = {
//   id: 12,
//   description: "mani",
//   url: 'http://mysite.com/dog'
// };
var res = store.search('a');
