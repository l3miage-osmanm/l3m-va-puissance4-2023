export const dataTests = {"userMail":"mona.osman@etu.univ-grenoble-alpes.fr","version":120,"mutants":[],"suites":[{"LtestIds":["KUzp8RIqwDx7ZcF9iUMS","61bLDU6GJr00zFjwjPDg","Nu0l33WbnYj9dQW9XHUN","fATILyzPBvEV6RsMmi6w","meuSvMOBKnIfbWHZ9qOB","bPGZJAKmHgjL6tkGQDQZ","WmS1kLeGOsmoQ3JrCfQ6","b1DumNS8vxHSF2vNFh5C","aHhyOvJBEkRYsYRyDHu2","oJKtNeKLHTfwHcj5p1pk","ndrcTPpOd90gHsjCgqlv","G9eU0s7DHoys1qWPTBge","IuvzpCWgG2UG4G47hngp","Cx1BsIO86ZReFqvM9ibo","OXQu3q2oNTy6u2P7DjII","yNATnNjP9rtqlECsn5qO","hdUzBkflMafYzw3hxWTy","Wm6vYDUjjI6AKkS2ZOZr","gwikOH7iLnbyQ7DxD0bD","3LCHl4E9WaUX6Kv6slXf","iisCfXnNwWewY6ZnDO0w","A39Jq1XsgW9y5vT6xNsg","56TtT4KvANBJKIU8gJLe"],"label":"test_isValid","id":"IbhYJ3MfpQE25M3DK1Yo","tests":[{"expect":{"valid":false,"reason":"There cannot be two winners"},"op":"isValid","id":"KUzp8RIqwDx7ZcF9iUMS","params":[{"grid":[[],["P1","P1","P1","P1"],["P2","P2","P2","P2"],[],[],[],[]],"turn":"P1"}],"comment":"..."},{"expect":{"valid":true},"op":"isValid","id":"61bLDU6GJr00zFjwjPDg","comment":"...","params":[{"grid":[[],[],[],[],[],[],[]],"turn":"P1"}]},{"expect":{"valid":true},"id":"Nu0l33WbnYj9dQW9XHUN","comment":"...","op":"isValid","params":[{"grid":[["P1"],["P2"],[],[],[],[],[]],"turn":"P1"}]},{"comment":"...","id":"fATILyzPBvEV6RsMmi6w","op":"isValid","params":[{"grid":[["P1","P2"],[],[],[],[],[],[]],"turn":"P1"}],"expect":{"valid":true}},{"op":"isValid","id":"meuSvMOBKnIfbWHZ9qOB","params":[{"grid":[["P2","P1"],[],[],[],[],[],[]],"turn":"P1"}],"expect":{"valid":true},"comment":"..."},{"params":[{"grid":[["P1","P1","P1","P1"],["P2","P2","P2","P2"],[],[],[],[],[]],"turn":"P1"}],"id":"bPGZJAKmHgjL6tkGQDQZ","expect":{"valid":false,"reason":"There cannot be two winners"},"op":"isValid","comment":"..."},{"expect":{"valid":true},"params":[{"grid":[["P1"],["P2","P1"],["P2","P2","P1"],["P1","P2","P2"],["P1"],[],[]],"turn":"P1"}],"op":"isValid","id":"WmS1kLeGOsmoQ3JrCfQ6","comment":"..."},{"comment":"...","params":[{"grid":[[],["P1","P1"],[],[],[],[],[]],"turn":"P1"}],"id":"b1DumNS8vxHSF2vNFh5C","op":"isValid","expect":{"valid":false,"reason":"too much token for P1"}},{"comment":"...","params":[{"grid":[[],[],["P2"],["P2"],[],[],[]],"turn":"P1"}],"expect":{"reason":"too much token for P2","valid":false},"id":"aHhyOvJBEkRYsYRyDHu2","op":"isValid"},{"comment":"...","params":[{"grid":[[],[],[],[],[],[],["P1"]],"turn":"P2"}],"expect":{"valid":true},"op":"isValid","id":"oJKtNeKLHTfwHcj5p1pk"},{"expect":{"valid":false,"reason":"column 2 has too much tokens"},"params":[{"grid":[[],["P1","P2","P1","P2","P1","P2","P1"],[],[],[],[],[]],"turn":"P1"}],"id":"ndrcTPpOd90gHsjCgqlv","op":"isValid","comment":"..."},{"comment":"...","id":"G9eU0s7DHoys1qWPTBge","params":[{"grid":[["P1","P2","P1","P2","P1","P2","P1"],[],[],[],[],[],[]],"turn":"P1"}],"expect":{"reason":"column 1 has too much tokens","valid":false},"op":"isValid"},{"op":"isValid","params":[{"grid":[[],[],["P1","P2","P1","P2","P1","P2","P1"],[],[],[],[]],"turn":"P1"}],"expect":{"valid":false,"reason":"column 3 has too much tokens"},"id":"IuvzpCWgG2UG4G47hngp","comment":"..."},{"id":"Cx1BsIO86ZReFqvM9ibo","comment":"...","expect":{"reason":"column 4 has too much tokens","valid":false},"params":[{"grid":[[],[],[],["P1","P2","P1","P2","P1","P2","P1"],[],[],[]],"turn":"P1"}],"op":"isValid"},{"comment":"...","params":[{"grid":[[],[],[],[],["P1","P2","P1","P2","P1","P2","P1"],[],[]],"turn":"P1"}],"id":"OXQu3q2oNTy6u2P7DjII","op":"isValid","expect":{"valid":false,"reason":"column 5 has too much tokens"}},{"comment":"...","params":[{"grid":[[],[],[],[],[],["P1","P2","P1","P2","P1","P2","P1"],[]],"turn":"P1"}],"expect":{"reason":"column 6 has too much tokens","valid":false},"id":"yNATnNjP9rtqlECsn5qO","op":"isValid"},{"op":"isValid","comment":"...","expect":{"valid":false,"reason":"column 7 has too much tokens"},"params":[{"grid":[[],[],[],[],[],[],["P1","P2","P1","P2","P1","P2","P1"]],"turn":"P1"}],"id":"hdUzBkflMafYzw3hxWTy"},{"op":"isValid","expect":{"valid":true},"comment":"...","id":"Wm6vYDUjjI6AKkS2ZOZr","params":[{"grid":[[],[],[],["P1"],[],[],[]],"turn":"P2"}]},{"id":"gwikOH7iLnbyQ7DxD0bD","expect":{"reason":"not the turn of P1","valid":false},"op":"isValid","comment":"...","params":[{"grid":[["P1"],[],[],[],[],[],[]],"turn":"P1"}]},{"params":[{"grid":[[],[],["P2"],["P1"],[],[],[]],"turn":"P2"}],"comment":"...","id":"3LCHl4E9WaUX6Kv6slXf","expect":{"valid":false,"reason":"not the turn of P2"},"op":"isValid"},{"id":"iisCfXnNwWewY6ZnDO0w","comment":"...","op":"isValid","expect":{"valid":false,"reason":"not the turn of P2"},"params":[{"grid":[[],[],[],[],["P1"],["P2","P1"],["P2"]],"turn":"P2"}]},{"params":[{"grid":[[],["P2"],["P2"],[],[],["P1"],["P1"]],"turn":"P2"}],"op":"isValid","id":"A39Jq1XsgW9y5vT6xNsg","expect":{"valid":false,"reason":"not the turn of P2"},"comment":"..."},{"id":"56TtT4KvANBJKIU8gJLe","comment":"...","op":"isValid","expect":{"reason":"not the turn of P1","valid":false},"params":[{"grid":[[],[],[],["P2"],["P2"],[],["P1","P1","P1"]],"turn":"P1"}]}]},{"LtestIds":[],"id":"e8OmZjzvvbJHYOOWPF0N","label":"test_play","tests":[]},{"label":"test_winner","id":"tAJowOxLAnYxqv4DFXbH","LtestIds":["ZgWsWwQxdtRFPxbvSu1G","UYKE4m7HTQwXgj9h79fw","tvNcNX56gL2jbbkuUiDO","lVWaAP4ipEDPqTRUl96Q","1B2glot1NAhRJgpAtr54","HiFydbp4Ptl4ySNUslVe","OUPCM5Nwi1aFBLQSxSPt","bISVoUE5mYBH6Y56Smwu","hAUI6IaYCti1cZ1x6YLw","X3mVLgh005S9dhgSvYSw","lZGF6wZgDry5SFoRR6vi","NWkn8Y4mjzm8TfNLouMp"],"tests":[{"expect":"P1","id":"ZgWsWwQxdtRFPxbvSu1G","params":[{"grid":[["P1","P1","P1","P1"],["P2"],[],[],["P2"],["P2"],[]],"turn":"P2"}],"op":"winner","comment":"..."},{"params":[{"grid":[[],[],[],[],[],[],[]],"turn":"P1"}],"expect":"no winner yet","op":"winner","comment":"...","id":"UYKE4m7HTQwXgj9h79fw"},{"id":"tvNcNX56gL2jbbkuUiDO","expect":"P1","op":"winner","comment":"...","params":[{"grid":[["P1"],["P2","P1"],["P2","P2","P1"],["P1","P2","P1","P1"],["P2"],[],[]],"turn":"P2"}]},{"params":[{"grid":[["P2"],["P1","P2"],["P1","P1","P2"],["P1","P2","P1","P2"],[],[],[]],"turn":"P1"}],"id":"lVWaAP4ipEDPqTRUl96Q","expect":"P2","comment":"...","op":"winner"},{"id":"1B2glot1NAhRJgpAtr54","params":[{"grid":[["P2"],[],["P2","P1","P2","P1"],["P2","P1","P1"],["P2","P1"],["P1"],[]],"turn":"P2"}],"op":"winner","comment":"...","expect":"P1"},{"expect":{"valid":true},"id":"HiFydbp4Ptl4ySNUslVe","params":[{"grid":[["P2","P2"],[],["P1","P1","P1","P2"],["P1","P1","P2"],["P1","P2"],["P2"],[]],"turn":"P1"}],"op":"isValid","comment":"..."},{"expect":"P1","params":[{"grid":[["P2"],["P2","P2"],["P1"],["P1"],["P1"],["P1"],[]],"turn":"P2"}],"comment":"...","op":"winner","id":"OUPCM5Nwi1aFBLQSxSPt"},{"id":"bISVoUE5mYBH6Y56Smwu","params":[{"grid":[["P1","P2","P2","P1","P1","P2"],[],[],[],[],[],["P2","P1","P1","P2","P2","P1"]],"turn":"P1"}],"expect":"no winner yet","op":"winner","comment":"..."},{"params":[{"grid":[["P2","P1","P1","P2","P1","P2"],["P1","P2","P1","P2","P2","P1"],["P1","P2","P1","P1","P1","P2"],["P2","P1","P2","P1","P1","P2"],["P2","P1","P2","P2","P2","P1"],["P1","P1","P2","P1","P1","P2"],["P2","P2","P1","P2","P1","P2"]],"turn":"P2"}],"op":"winner","expect":"P1","comment":"...","id":"hAUI6IaYCti1cZ1x6YLw"},{"id":"X3mVLgh005S9dhgSvYSw","op":"winner","params":[{"grid":[[],["P1","P1"],["P2","P1"],["P2","P1"],["P2"],["P2"],[]],"turn":"P1"}],"expect":"P2","comment":"..."},{"op":"winner","params":[{"grid":[["P2","P2","P2"],["P1","P1","P2"],["P1"],["P2","P1"],["P1","P2"],["P2","P1"],["P1"]],"turn":"P1"}],"expect":"no winner yet","id":"lZGF6wZgDry5SFoRR6vi","comment":"..."},{"comment":"...","op":"winner","params":[{"grid":[[],["P2"],["P2","P1"],["P1","P1"],["P2","P2","P1"],["P1"],[]],"turn":"P1"}],"id":"NWkn8Y4mjzm8TfNLouMp","expect":"no winner yet"}]}],"canObserveString":"[]","canObserve":"[]","evals":[108,{"isValid":[21,21],"play":[0,0],"winner":[6,6]},{"isValid":[9,14],"play":[0,9],"winner":[6,7]}]}