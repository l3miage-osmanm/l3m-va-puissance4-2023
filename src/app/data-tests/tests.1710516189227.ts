export const dataTests = {"userMail":"mona.osman@etu.univ-grenoble-alpes.fr","version":110,"mutants":[],"suites":[{"id":"IbhYJ3MfpQE25M3DK1Yo","LtestIds":["KUzp8RIqwDx7ZcF9iUMS","61bLDU6GJr00zFjwjPDg","Nu0l33WbnYj9dQW9XHUN","fATILyzPBvEV6RsMmi6w","meuSvMOBKnIfbWHZ9qOB","bPGZJAKmHgjL6tkGQDQZ","WmS1kLeGOsmoQ3JrCfQ6","b1DumNS8vxHSF2vNFh5C","aHhyOvJBEkRYsYRyDHu2","oJKtNeKLHTfwHcj5p1pk","ndrcTPpOd90gHsjCgqlv","G9eU0s7DHoys1qWPTBge","IuvzpCWgG2UG4G47hngp","Cx1BsIO86ZReFqvM9ibo","OXQu3q2oNTy6u2P7DjII","yNATnNjP9rtqlECsn5qO","hdUzBkflMafYzw3hxWTy","Wm6vYDUjjI6AKkS2ZOZr","gwikOH7iLnbyQ7DxD0bD","3LCHl4E9WaUX6Kv6slXf"],"label":"test_isValid","tests":[{"comment":"...","op":"isValid","params":[{"grid":[[],["P1","P1","P1","P1"],["P2","P2","P2","P2"],[],[],[],[]],"turn":"P1"}],"expect":{"reason":"There cannot be two winners","valid":false},"id":"KUzp8RIqwDx7ZcF9iUMS"},{"params":[{"grid":[[],[],[],[],[],[],[]],"turn":"P1"}],"op":"isValid","expect":{"valid":true},"id":"61bLDU6GJr00zFjwjPDg","comment":"..."},{"comment":"...","params":[{"grid":[["P1"],["P2"],[],[],[],[],[]],"turn":"P1"}],"expect":{"valid":true},"id":"Nu0l33WbnYj9dQW9XHUN","op":"isValid"},{"expect":{"valid":true},"comment":"...","params":[{"grid":[["P1","P2"],[],[],[],[],[],[]],"turn":"P1"}],"op":"isValid","id":"fATILyzPBvEV6RsMmi6w"},{"op":"isValid","expect":{"valid":true},"comment":"...","id":"meuSvMOBKnIfbWHZ9qOB","params":[{"grid":[["P2","P1"],[],[],[],[],[],[]],"turn":"P1"}]},{"expect":{"valid":false,"reason":"There cannot be two winners"},"comment":"...","params":[{"grid":[["P1","P1","P1","P1"],["P2","P2","P2","P2"],[],[],[],[],[]],"turn":"P1"}],"id":"bPGZJAKmHgjL6tkGQDQZ","op":"isValid"},{"params":[{"grid":[["P1"],["P2","P1"],["P2","P2","P1"],["P1","P2","P2"],["P1"],[],[]],"turn":"P1"}],"expect":{"valid":true},"id":"WmS1kLeGOsmoQ3JrCfQ6","op":"isValid","comment":"..."},{"params":[{"grid":[[],["P1","P1"],[],[],[],[],[]],"turn":"P1"}],"expect":{"reason":"too much token for P1","valid":false},"op":"isValid","id":"b1DumNS8vxHSF2vNFh5C","comment":"..."},{"op":"isValid","params":[{"grid":[[],[],["P2"],["P2"],[],[],[]],"turn":"P1"}],"expect":{"reason":"too much token for P2","valid":false},"id":"aHhyOvJBEkRYsYRyDHu2","comment":"..."},{"expect":{"valid":true},"id":"oJKtNeKLHTfwHcj5p1pk","params":[{"grid":[[],[],[],[],[],[],["P1"]],"turn":"P2"}],"comment":"...","op":"isValid"},{"comment":"...","params":[{"grid":[[],["P1","P2","P1","P2","P1","P2","P1"],[],[],[],[],[]],"turn":"P1"}],"expect":{"valid":false,"reason":"column 2 has too much tokens"},"op":"isValid","id":"ndrcTPpOd90gHsjCgqlv"},{"op":"isValid","comment":"...","expect":{"valid":false,"reason":"column 1 has too much tokens"},"params":[{"grid":[["P1","P2","P1","P2","P1","P2","P1"],[],[],[],[],[],[]],"turn":"P1"}],"id":"G9eU0s7DHoys1qWPTBge"},{"op":"isValid","params":[{"grid":[[],[],["P1","P2","P1","P2","P1","P2","P1"],[],[],[],[]],"turn":"P1"}],"comment":"...","expect":{"valid":false,"reason":"column 3 has too much tokens"},"id":"IuvzpCWgG2UG4G47hngp"},{"id":"Cx1BsIO86ZReFqvM9ibo","op":"isValid","params":[{"grid":[[],[],[],["P1","P2","P1","P2","P1","P2","P1"],[],[],[]],"turn":"P1"}],"expect":{"reason":"column 4 has too much tokens","valid":false},"comment":"..."},{"expect":{"valid":false,"reason":"column 5 has too much tokens"},"comment":"...","op":"isValid","id":"OXQu3q2oNTy6u2P7DjII","params":[{"grid":[[],[],[],[],["P1","P2","P1","P2","P1","P2","P1"],[],[]],"turn":"P1"}]},{"id":"yNATnNjP9rtqlECsn5qO","comment":"...","expect":{"valid":false,"reason":"column 6 has too much tokens"},"params":[{"grid":[[],[],[],[],[],["P1","P2","P1","P2","P1","P2","P1"],[]],"turn":"P1"}],"op":"isValid"},{"expect":{"valid":false,"reason":"column 7 has too much tokens"},"params":[{"grid":[[],[],[],[],[],[],["P1","P2","P1","P2","P1","P2","P1"]],"turn":"P1"}],"op":"isValid","id":"hdUzBkflMafYzw3hxWTy","comment":"..."},{"comment":"...","op":"isValid","expect":{"valid":true},"params":[{"grid":[[],[],[],["P1"],[],[],[]],"turn":"P2"}],"id":"Wm6vYDUjjI6AKkS2ZOZr"},{"params":[{"grid":[["P1"],[],[],[],[],[],[]],"turn":"P1"}],"expect":{"valid":false,"reason":"not the turn of P1"},"comment":"...","op":"isValid","id":"gwikOH7iLnbyQ7DxD0bD"},{"comment":"...","params":[{"grid":[[],[],["P2"],["P1"],[],[],[]],"turn":"P2"}],"op":"isValid","expect":{"valid":false,"reason":"not the turn of P2"},"id":"3LCHl4E9WaUX6Kv6slXf"}]},{"LtestIds":[],"id":"e8OmZjzvvbJHYOOWPF0N","label":"test_play","tests":[]},{"label":"test_winner","id":"tAJowOxLAnYxqv4DFXbH","LtestIds":["ZgWsWwQxdtRFPxbvSu1G","UYKE4m7HTQwXgj9h79fw","tvNcNX56gL2jbbkuUiDO","lVWaAP4ipEDPqTRUl96Q","1B2glot1NAhRJgpAtr54","HiFydbp4Ptl4ySNUslVe","OUPCM5Nwi1aFBLQSxSPt","bISVoUE5mYBH6Y56Smwu","hAUI6IaYCti1cZ1x6YLw"],"tests":[{"op":"winner","params":[{"grid":[["P1","P1","P1","P1"],["P2"],[],[],["P2"],["P2"],[]],"turn":"P2"}],"expect":"P1","id":"ZgWsWwQxdtRFPxbvSu1G","comment":"..."},{"id":"UYKE4m7HTQwXgj9h79fw","comment":"...","expect":"no winner yet","op":"winner","params":[{"grid":[[],[],[],[],[],[],[]],"turn":"P1"}]},{"op":"winner","params":[{"grid":[["P1"],["P2","P1"],["P2","P2","P1"],["P1","P2","P1","P1"],["P2"],[],[]],"turn":"P2"}],"comment":"...","id":"tvNcNX56gL2jbbkuUiDO","expect":"P1"},{"op":"winner","comment":"...","expect":"P2","params":[{"grid":[["P2"],["P1","P2"],["P1","P1","P2"],["P1","P2","P1","P2"],[],[],[]],"turn":"P1"}],"id":"lVWaAP4ipEDPqTRUl96Q"},{"expect":"P1","op":"winner","params":[{"grid":[["P2"],[],["P2","P1","P2","P1"],["P2","P1","P1"],["P2","P1"],["P1"],[]],"turn":"P2"}],"comment":"...","id":"1B2glot1NAhRJgpAtr54"},{"params":[{"grid":[["P2","P2"],[],["P1","P1","P1","P2"],["P1","P1","P2"],["P1","P2"],["P2"],[]],"turn":"P1"}],"op":"isValid","comment":"...","expect":{"valid":true},"id":"HiFydbp4Ptl4ySNUslVe"},{"id":"OUPCM5Nwi1aFBLQSxSPt","expect":"P1","params":[{"grid":[["P2"],["P2","P2"],["P1"],["P1"],["P1"],["P1"],[]],"turn":"P2"}],"op":"winner","comment":"..."},{"op":"winner","comment":"...","params":[{"grid":[["P1","P2","P2","P1","P1","P2"],[],[],[],[],[],["P2","P1","P1","P2","P2","P1"]],"turn":"P1"}],"expect":"no winner yet","id":"bISVoUE5mYBH6Y56Smwu"},{"params":[{"grid":[["P2","P1","P1","P2","P1","P2"],["P1","P2","P1","P2","P1","P2"],["P1","P2","P1","P1","P1","P2"],["P2","P1","P2","P1","P2","P1"],["P2","P1","P2","P2","P2","P1"],["P1","P1","P2","P1","P1","P2"],["P2","P2","P1","P2","P1","P2"]],"turn":"P2"}],"id":"hAUI6IaYCti1cZ1x6YLw","expect":"DRAW","comment":"...","op":"winner"}]}],"canObserveString":"[]","canObserve":"[]","evals":[108,{"isValid":[21,21],"play":[0,0],"winner":[6,6]},{"winner":[6,7],"play":[0,9],"isValid":[9,14]}]}