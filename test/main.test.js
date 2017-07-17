require('../app/main');
describe("Album store", function() {
  beforeEach(function() {
    var store = new AlbumStore();
    var dummyObj = {
      id: 2,
      description: "mani",
      url: 'http://mysite.com/dog'
    };
  })
  it('New Photo added to the list', function() {
    var dummyObj = {
      description: 'mani',
      url: 'maniamuthann.com'
    };
    var length = store.photos.length;
    expect(store.add(dummyObj)).toEqual((length + 1));
  });
  it('Get Photo from the list', function() {
    var id = 1;

    expect(store.get(id)).toEqual({});
  });

  it('Remove Photo from the list', function() {
    expect(store.remove()).toEqual({});
  });

  it('Edit Photo in the list', function() {
    expect(store.edit()).toEqual(true);
  });

  it('Search description from the list', function() {
    expect(store.search()).toEqual([]);
  });
});
