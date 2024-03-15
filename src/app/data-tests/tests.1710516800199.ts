export const dataTests = {"userMail":"mona.osman@etu.univ-grenoble-alpes.fr","version":129,"mutants":[],"suites":[{"label":"test_isValid","id":"IbhYJ3MfpQE25M3DK1Yo","LtestIds":["KUzp8RIqwDx7ZcF9iUMS","61bLDU6GJr00zFjwjPDg","Nu0l33WbnYj9dQW9XHUN","fATILyzPBvEV6RsMmi6w","meuSvMOBKnIfbWHZ9qOB","bPGZJAKmHgjL6tkGQDQZ","WmS1kLeGOsmoQ3JrCfQ6","b1DumNS8vxHSF2vNFh5C","aHhyOvJBEkRYsYRyDHu2","oJKtNeKLHTfwHcj5p1pk","ndrcTPpOd90gHsjCgqlv","G9eU0s7DHoys1qWPTBge","IuvzpCWgG2UG4G47hngp","Cx1BsIO86ZReFqvM9ibo","OXQu3q2oNTy6u2P7DjII","yNATnNjP9rtqlECsn5qO","hdUzBkflMafYzw3hxWTy","Wm6vYDUjjI6AKkS2ZOZr","gwikOH7iLnbyQ7DxD0bD","3LCHl4E9WaUX6Kv6slXf","iisCfXnNwWewY6ZnDO0w","A39Jq1XsgW9y5vT6xNsg","56TtT4KvANBJKIU8gJLe","Y1zh3GpwkZyq1Vid1fw6","wJ9OPdVWXapP5zG0CA4i","ZaTBrXlcVyB7OmEk5yXu"],"tests":[{"id":"KUzp8RIqwDx7ZcF9iUMS","op":"isValid","params":[{"grid":[[],["P1","P1","P1","P1"],["P2","P2","P2","P2"],[],[],[],[]],"turn":"P1"}],"expect":{"valid":false,"reason":"There cannot be two winners"},"comment":"..."},{"params":[{"grid":[[],[],[],[],[],[],[]],"turn":"P1"}],"comment":"...","id":"61bLDU6GJr00zFjwjPDg","expect":{"valid":true},"op":"isValid"},{"expect":{"valid":true},"comment":"...","params":[{"grid":[["P1"],["P2"],[],[],[],[],[]],"turn":"P1"}],"id":"Nu0l33WbnYj9dQW9XHUN","op":"isValid"},{"id":"fATILyzPBvEV6RsMmi6w","op":"isValid","comment":"...","expect":{"valid":true},"params":[{"grid":[["P1","P2"],[],[],[],[],[],[]],"turn":"P1"}]},{"params":[{"grid":[["P2","P1"],[],[],[],[],[],[]],"turn":"P1"}],"expect":{"valid":true},"id":"meuSvMOBKnIfbWHZ9qOB","op":"isValid","comment":"..."},{"expect":{"valid":false,"reason":"There cannot be two winners"},"comment":"...","params":[{"grid":[["P1","P1","P1","P1"],["P2","P2","P2","P2"],[],[],[],[],[]],"turn":"P1"}],"id":"bPGZJAKmHgjL6tkGQDQZ","op":"isValid"},{"expect":{"valid":true},"params":[{"grid":[["P1"],["P2","P1"],["P2","P2","P1"],["P1","P2","P2"],["P1"],[],[]],"turn":"P1"}],"id":"WmS1kLeGOsmoQ3JrCfQ6","op":"isValid","comment":"..."},{"op":"isValid","id":"b1DumNS8vxHSF2vNFh5C","expect":{"reason":"too much token for P1","valid":false},"params":[{"grid":[[],["P1","P1"],[],[],[],[],[]],"turn":"P1"}],"comment":"..."},{"comment":"...","expect":{"reason":"too much token for P2","valid":false},"op":"isValid","id":"aHhyOvJBEkRYsYRyDHu2","params":[{"grid":[[],[],["P2"],["P2"],[],[],[]],"turn":"P1"}]},{"op":"isValid","comment":"...","expect":{"valid":true},"id":"oJKtNeKLHTfwHcj5p1pk","params":[{"grid":[[],[],[],[],[],[],["P1"]],"turn":"P2"}]},{"id":"ndrcTPpOd90gHsjCgqlv","comment":"...","params":[{"grid":[[],["P1","P2","P1","P2","P1","P2","P1"],[],[],[],[],[]],"turn":"P1"}],"op":"isValid","expect":{"reason":"column 2 has too much tokens","valid":false}},{"params":[{"grid":[["P1","P2","P1","P2","P1","P2","P1"],[],[],[],[],[],[]],"turn":"P1"}],"id":"G9eU0s7DHoys1qWPTBge","expect":{"valid":false,"reason":"column 1 has too much tokens"},"op":"isValid","comment":"..."},{"id":"IuvzpCWgG2UG4G47hngp","params":[{"grid":[[],[],["P1","P2","P1","P2","P1","P2","P1"],[],[],[],[]],"turn":"P1"}],"comment":"...","expect":{"reason":"column 3 has too much tokens","valid":false},"op":"isValid"},{"id":"Cx1BsIO86ZReFqvM9ibo","params":[{"grid":[[],[],[],["P1","P2","P1","P2","P1","P2","P1"],[],[],[]],"turn":"P1"}],"expect":{"valid":false,"reason":"column 4 has too much tokens"},"comment":"...","op":"isValid"},{"expect":{"reason":"column 5 has too much tokens","valid":false},"params":[{"grid":[[],[],[],[],["P1","P2","P1","P2","P1","P2","P1"],[],[]],"turn":"P1"}],"comment":"...","op":"isValid","id":"OXQu3q2oNTy6u2P7DjII"},{"params":[{"grid":[[],[],[],[],[],["P1","P2","P1","P2","P1","P2","P1"],[]],"turn":"P1"}],"id":"yNATnNjP9rtqlECsn5qO","expect":{"valid":false,"reason":"column 6 has too much tokens"},"comment":"...","op":"isValid"},{"op":"isValid","id":"hdUzBkflMafYzw3hxWTy","params":[{"grid":[[],[],[],[],[],[],["P1","P2","P1","P2","P1","P2","P1"]],"turn":"P1"}],"expect":{"reason":"column 7 has too much tokens","valid":false},"comment":"..."},{"id":"Wm6vYDUjjI6AKkS2ZOZr","comment":"...","expect":{"valid":true},"params":[{"grid":[[],[],[],["P1"],[],[],[]],"turn":"P2"}],"op":"isValid"},{"params":[{"grid":[["P1"],[],[],[],[],[],[]],"turn":"P1"}],"comment":"...","op":"isValid","id":"gwikOH7iLnbyQ7DxD0bD","expect":{"valid":false,"reason":"not the turn of P1"}},{"id":"3LCHl4E9WaUX6Kv6slXf","op":"isValid","expect":{"reason":"not the turn of P2","valid":false},"comment":"...","params":[{"grid":[[],[],["P2"],["P1"],[],[],[]],"turn":"P2"}]},{"params":[{"grid":[[],[],[],[],["P1"],["P2","P1"],["P2"]],"turn":"P2"}],"expect":{"reason":"not the turn of P2","valid":false},"comment":"...","op":"isValid","id":"iisCfXnNwWewY6ZnDO0w"},{"op":"isValid","id":"A39Jq1XsgW9y5vT6xNsg","expect":{"reason":"not the turn of P2","valid":false},"params":[{"grid":[[],["P2"],["P2"],[],[],["P1"],["P1"]],"turn":"P2"}],"comment":"..."},{"params":[{"grid":[[],[],[],["P2"],["P2"],[],["P1","P1","P1"]],"turn":"P1"}],"comment":"...","id":"56TtT4KvANBJKIU8gJLe","expect":{"valid":false,"reason":"not the turn of P1"},"op":"isValid"},{"op":"isValid","id":"Y1zh3GpwkZyq1Vid1fw6","comment":"...","params":[{"grid":[[],[],["P1","P2","P1","P1","P1"],[],["P2"],[],[]],"turn":"P1"}],"expect":{"reason":"too much token for P1","valid":false}},{"params":[{"grid":[["P2"],["P2"],[],["P1","P2","P2"],["P1"],[],[]],"turn":"P1"}],"op":"isValid","comment":"...","expect":{"reason":"too much token for P2","valid":false},"id":"wJ9OPdVWXapP5zG0CA4i"},{"expect":{"valid":true},"comment":"...","id":"ZaTBrXlcVyB7OmEk5yXu","params":[{"grid":[["P1"],["P2","P2","P1","P1","P2"],["P2"],["P2","P1"],["P1","P2"],["P1","P2"],["P1"]],"turn":"P1"}],"op":"isValid"}]},{"LtestIds":["R83Nb3b0Lp6yoHs22HhJ"],"label":"test_play","id":"e8OmZjzvvbJHYOOWPF0N","tests":[{"op":"play","id":"R83Nb3b0Lp6yoHs22HhJ","expect":{"success":false,"reason":"no such column"},"comment":"...","params":[{"grid":[[],[],[],[],[],[],[]],"turn":"P1"},8]}]},{"LtestIds":["ZgWsWwQxdtRFPxbvSu1G","UYKE4m7HTQwXgj9h79fw","tvNcNX56gL2jbbkuUiDO","lVWaAP4ipEDPqTRUl96Q","1B2glot1NAhRJgpAtr54","HiFydbp4Ptl4ySNUslVe","OUPCM5Nwi1aFBLQSxSPt","bISVoUE5mYBH6Y56Smwu","hAUI6IaYCti1cZ1x6YLw","X3mVLgh005S9dhgSvYSw","lZGF6wZgDry5SFoRR6vi","NWkn8Y4mjzm8TfNLouMp","lpjuITH5weJS6nhpyLRc","UAW70OgcehbEtGXp0knD"],"label":"test_winner","id":"tAJowOxLAnYxqv4DFXbH","tests":[{"expect":"P1","params":[{"grid":[["P1","P1","P1","P1"],["P2"],[],[],["P2"],["P2"],[]],"turn":"P2"}],"op":"winner","comment":"...","id":"ZgWsWwQxdtRFPxbvSu1G"},{"expect":"no winner yet","params":[{"grid":[[],[],[],[],[],[],[]],"turn":"P1"}],"id":"UYKE4m7HTQwXgj9h79fw","comment":"...","op":"winner"},{"op":"winner","expect":"P1","params":[{"grid":[["P1"],["P2","P1"],["P2","P2","P1"],["P1","P2","P1","P1"],["P2"],[],[]],"turn":"P2"}],"comment":"...","id":"tvNcNX56gL2jbbkuUiDO"},{"id":"lVWaAP4ipEDPqTRUl96Q","comment":"...","expect":"P2","op":"winner","params":[{"grid":[["P2"],["P1","P2"],["P1","P1","P2"],["P1","P2","P1","P2"],[],[],[]],"turn":"P1"}]},{"params":[{"grid":[["P2"],[],["P2","P1","P2","P1"],["P2","P1","P1"],["P2","P1"],["P1"],[]],"turn":"P2"}],"id":"1B2glot1NAhRJgpAtr54","op":"winner","expect":"P1","comment":"..."},{"params":[{"grid":[["P2","P2"],[],["P1","P1","P1","P2"],["P1","P1","P2"],["P1","P2"],["P2"],[]],"turn":"P1"}],"op":"isValid","id":"HiFydbp4Ptl4ySNUslVe","expect":{"valid":true},"comment":"..."},{"expect":"P1","id":"OUPCM5Nwi1aFBLQSxSPt","op":"winner","comment":"...","params":[{"grid":[["P2"],["P2","P2"],["P1"],["P1"],["P1"],["P1"],[]],"turn":"P2"}]},{"id":"bISVoUE5mYBH6Y56Smwu","comment":"...","params":[{"grid":[["P1","P2","P2","P1","P1","P2"],[],[],[],[],[],["P2","P1","P1","P2","P2","P1"]],"turn":"P1"}],"op":"winner","expect":"no winner yet"},{"comment":"...","params":[{"grid":[["P2","P1","P1","P2","P1","P2"],["P1","P2","P1","P2","P2","P1"],["P1","P2","P1","P1","P1","P2"],["P2","P1","P2","P1","P1","P2"],["P2","P1","P2","P2","P2","P1"],["P1","P1","P2","P1","P1","P2"],["P2","P2","P1","P2","P1","P2"]],"turn":"P2"}],"id":"hAUI6IaYCti1cZ1x6YLw","op":"winner","expect":"P1"},{"params":[{"grid":[[],["P1","P1"],["P2","P1"],["P2","P1"],["P2"],["P2"],[]],"turn":"P1"}],"comment":"...","expect":"P2","id":"X3mVLgh005S9dhgSvYSw","op":"winner"},{"comment":"...","expect":"no winner yet","id":"lZGF6wZgDry5SFoRR6vi","op":"winner","params":[{"grid":[["P2","P2","P2"],["P1","P1","P2"],["P1"],["P2","P1"],["P1","P2"],["P2","P1"],["P1"]],"turn":"P1"}]},{"expect":"no winner yet","id":"NWkn8Y4mjzm8TfNLouMp","op":"winner","comment":"...","params":[{"grid":[[],["P2"],["P2","P1"],["P1","P1"],["P2","P2","P1"],["P1"],[]],"turn":"P1"}]},{"op":"winner","params":[{"grid":[[],[],["P1","P1"],["P2"],[],[],[]],"turn":"P1"}],"expect":"no winner yet","comment":"...","id":"lpjuITH5weJS6nhpyLRc"},{"comment":"...","id":"UAW70OgcehbEtGXp0knD","expect":"P2","params":[{"grid":[["P2"],["P2"],["P2"],["P2"],["P1"],["P1"],["P1","P1"]],"turn":"P1"}],"op":"winner"}]}],"canObserveString":"[]","canObserve":"[]","evals":[108,{"play":[0,0],"isValid":[21,21],"winner":[6,6]},{"isValid":[9,14],"play":[0,9],"winner":[6,7]}]}