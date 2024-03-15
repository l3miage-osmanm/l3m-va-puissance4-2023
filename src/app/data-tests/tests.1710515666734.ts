export const dataTests = {"userMail":"mona.osman@etu.univ-grenoble-alpes.fr","version":96,"mutants":[],"suites":[{"LtestIds":["KUzp8RIqwDx7ZcF9iUMS","61bLDU6GJr00zFjwjPDg","Nu0l33WbnYj9dQW9XHUN","fATILyzPBvEV6RsMmi6w","meuSvMOBKnIfbWHZ9qOB","bPGZJAKmHgjL6tkGQDQZ","WmS1kLeGOsmoQ3JrCfQ6","b1DumNS8vxHSF2vNFh5C","aHhyOvJBEkRYsYRyDHu2","oJKtNeKLHTfwHcj5p1pk","ndrcTPpOd90gHsjCgqlv","G9eU0s7DHoys1qWPTBge","IuvzpCWgG2UG4G47hngp","Cx1BsIO86ZReFqvM9ibo","OXQu3q2oNTy6u2P7DjII","yNATnNjP9rtqlECsn5qO","hdUzBkflMafYzw3hxWTy","Wm6vYDUjjI6AKkS2ZOZr","gwikOH7iLnbyQ7DxD0bD","3LCHl4E9WaUX6Kv6slXf"],"id":"IbhYJ3MfpQE25M3DK1Yo","label":"test_isValid","tests":[{"params":[{"grid":[[],["P1","P1","P1","P1"],["P2","P2","P2","P2"],[],[],[],[]],"turn":"P1"}],"expect":{"valid":false,"reason":"There cannot be two winners"},"comment":"...","id":"KUzp8RIqwDx7ZcF9iUMS","op":"isValid"},{"comment":"...","op":"isValid","expect":{"valid":true},"id":"61bLDU6GJr00zFjwjPDg","params":[{"grid":[[],[],[],[],[],[],[]],"turn":"P1"}]},{"id":"Nu0l33WbnYj9dQW9XHUN","params":[{"grid":[["P1"],["P2"],[],[],[],[],[]],"turn":"P1"}],"comment":"...","expect":{"valid":true},"op":"isValid"},{"params":[{"grid":[["P1","P2"],[],[],[],[],[],[]],"turn":"P1"}],"op":"isValid","expect":{"valid":true},"id":"fATILyzPBvEV6RsMmi6w","comment":"..."},{"expect":{"valid":true},"params":[{"grid":[["P2","P1"],[],[],[],[],[],[]],"turn":"P1"}],"comment":"...","op":"isValid","id":"meuSvMOBKnIfbWHZ9qOB"},{"expect":{"valid":false,"reason":"There cannot be two winners"},"op":"isValid","id":"bPGZJAKmHgjL6tkGQDQZ","comment":"...","params":[{"grid":[["P1","P1","P1","P1"],["P2","P2","P2","P2"],[],[],[],[],[]],"turn":"P1"}]},{"expect":{"valid":true},"op":"isValid","id":"WmS1kLeGOsmoQ3JrCfQ6","comment":"...","params":[{"grid":[["P1"],["P2","P1"],["P2","P2","P1"],["P1","P2","P2"],["P1"],[],[]],"turn":"P1"}]},{"id":"b1DumNS8vxHSF2vNFh5C","op":"isValid","params":[{"grid":[[],["P1","P1"],[],[],[],[],[]],"turn":"P1"}],"expect":{"reason":"too much token for P1","valid":false},"comment":"..."},{"id":"aHhyOvJBEkRYsYRyDHu2","op":"isValid","params":[{"grid":[[],[],["P2"],["P2"],[],[],[]],"turn":"P1"}],"comment":"...","expect":{"valid":false,"reason":"too much token for P2"}},{"params":[{"grid":[[],[],[],[],[],[],["P1"]],"turn":"P2"}],"id":"oJKtNeKLHTfwHcj5p1pk","expect":{"valid":true},"comment":"...","op":"isValid"},{"expect":{"valid":false,"reason":"column 2 has too much tokens"},"op":"isValid","comment":"...","id":"ndrcTPpOd90gHsjCgqlv","params":[{"grid":[[],["P1","P2","P1","P2","P1","P2","P1"],[],[],[],[],[]],"turn":"P1"}]},{"comment":"...","id":"G9eU0s7DHoys1qWPTBge","expect":{"reason":"column 1 has too much tokens","valid":false},"op":"isValid","params":[{"grid":[["P1","P2","P1","P2","P1","P2","P1"],[],[],[],[],[],[]],"turn":"P1"}]},{"params":[{"grid":[[],[],["P1","P2","P1","P2","P1","P2","P1"],[],[],[],[]],"turn":"P1"}],"id":"IuvzpCWgG2UG4G47hngp","expect":{"reason":"column 3 has too much tokens","valid":false},"comment":"...","op":"isValid"},{"op":"isValid","comment":"...","id":"Cx1BsIO86ZReFqvM9ibo","expect":{"valid":false,"reason":"column 4 has too much tokens"},"params":[{"grid":[[],[],[],["P1","P2","P1","P2","P1","P2","P1"],[],[],[]],"turn":"P1"}]},{"expect":{"reason":"column 5 has too much tokens","valid":false},"op":"isValid","id":"OXQu3q2oNTy6u2P7DjII","params":[{"grid":[[],[],[],[],["P1","P2","P1","P2","P1","P2","P1"],[],[]],"turn":"P1"}],"comment":"..."},{"id":"yNATnNjP9rtqlECsn5qO","expect":{"reason":"column 6 has too much tokens","valid":false},"comment":"...","op":"isValid","params":[{"grid":[[],[],[],[],[],["P1","P2","P1","P2","P1","P2","P1"],[]],"turn":"P1"}]},{"comment":"...","id":"hdUzBkflMafYzw3hxWTy","op":"isValid","params":[{"grid":[[],[],[],[],[],[],["P1","P2","P1","P2","P1","P2","P1"]],"turn":"P1"}],"expect":{"valid":false,"reason":"column 7 has too much tokens"}},{"params":[{"grid":[[],[],[],["P1"],[],[],[]],"turn":"P2"}],"id":"Wm6vYDUjjI6AKkS2ZOZr","comment":"...","expect":{"valid":true},"op":"isValid"},{"comment":"...","id":"gwikOH7iLnbyQ7DxD0bD","op":"isValid","expect":{"valid":false,"reason":"not the turn of P1"},"params":[{"grid":[["P1"],[],[],[],[],[],[]],"turn":"P1"}]},{"op":"isValid","params":[{"grid":[[],[],["P2"],["P1"],[],[],[]],"turn":"P2"}],"id":"3LCHl4E9WaUX6Kv6slXf","expect":{"valid":false,"reason":"not the turn of P2"},"comment":"..."}]},{"LtestIds":[],"id":"e8OmZjzvvbJHYOOWPF0N","label":"test_play","tests":[]},{"label":"test_winner","LtestIds":["ZgWsWwQxdtRFPxbvSu1G","UYKE4m7HTQwXgj9h79fw","tvNcNX56gL2jbbkuUiDO","lVWaAP4ipEDPqTRUl96Q","1B2glot1NAhRJgpAtr54","HiFydbp4Ptl4ySNUslVe","OUPCM5Nwi1aFBLQSxSPt","PtJWAxZ4itbp8JJK3JAk","yvJ2IP9w5NJu8JS1OkGh","tBpKICExoo9iN0tHTpcE","FVIKR9qVeBQZ2b5qRrwK","CwEzh8Hx5qOE52AkUVGb","h3dRMPVuULz2GrfyN0aY","4yhpznXYJeRRgX1rIrGV","sXGqxOCBPMS5L9Xgt7w7","at9dPTMOVjipjoW0g45G","cgPtDLwVyOpHrXYf4lvO","aG0PNcsSFooUMCGnJbKV"],"id":"tAJowOxLAnYxqv4DFXbH","tests":[{"op":"winner","id":"ZgWsWwQxdtRFPxbvSu1G","params":[{"grid":[["P1","P1","P1","P1"],["P2"],[],[],["P2"],["P2"],[]],"turn":"P2"}],"expect":"P1","comment":"..."},{"id":"UYKE4m7HTQwXgj9h79fw","params":[{"grid":[[],[],[],[],[],[],[]],"turn":"P1"}],"expect":"no winner yet","op":"winner","comment":"..."},{"params":[{"grid":[["P1"],["P2","P1"],["P2","P2","P1"],["P1","P2","P1","P1"],["P2"],[],[]],"turn":"P2"}],"expect":"P1","id":"tvNcNX56gL2jbbkuUiDO","comment":"...","op":"winner"},{"comment":"...","expect":"P2","id":"lVWaAP4ipEDPqTRUl96Q","params":[{"grid":[["P2"],["P1","P2"],["P1","P1","P2"],["P1","P2","P1","P2"],[],[],[]],"turn":"P1"}],"op":"winner"},{"comment":"...","id":"1B2glot1NAhRJgpAtr54","op":"winner","expect":"P1","params":[{"grid":[["P2"],[],["P2","P1","P2","P1"],["P2","P1","P1"],["P2","P1"],["P1"],[]],"turn":"P2"}]},{"comment":"...","params":[{"grid":[["P2","P2"],[],["P1","P1","P1","P2"],["P1","P1","P2"],["P1","P2"],["P2"],[]],"turn":"P1"}],"expect":{"valid":true},"op":"isValid","id":"HiFydbp4Ptl4ySNUslVe"},{"params":[{"grid":[["P2"],["P2","P2"],["P1"],["P1"],["P1"],["P1"],[]],"turn":"P2"}],"id":"OUPCM5Nwi1aFBLQSxSPt","expect":{"valid":true},"op":"isValid","comment":"..."},{"params":[{"grid":[[],[],["P1","P2","P1","P1"],[],[],[],[]],"turn":"P2"}],"comment":"...","expect":{"reason":"too much token for P1","valid":false},"op":"isValid","id":"PtJWAxZ4itbp8JJK3JAk"},{"params":[{"grid":[[],[],["P1"],["P2","P2"],[],[],[]],"turn":"P1"}],"op":"isValid","id":"yvJ2IP9w5NJu8JS1OkGh","expect":{"valid":false,"reason":"too much token for P2"},"comment":"..."},{"comment":"...","expect":{"valid":false,"reason":"There cannot be two winners"},"id":"tBpKICExoo9iN0tHTpcE","op":"isValid","params":[{"grid":[[],[],["P1","P1","P1","P1"],["P2","P2","P2","P2"],[],[],[]],"turn":"P1"}]},{"params":[{"grid":[["P1","P1","P1","P1"],[],[],["P2"],["P2"],["P2"],["P2"]],"turn":"P1"}],"op":"isValid","expect":{"reason":"There cannot be two winners","valid":false},"comment":"...","id":"FVIKR9qVeBQZ2b5qRrwK"},{"params":[{"grid":[["P2","P2","P2","P2"],[],[],["P1"],["P1"],["P1"],["P1"]],"turn":"P1"}],"op":"isValid","expect":{"reason":"There cannot be two winners","valid":false},"id":"CwEzh8Hx5qOE52AkUVGb","comment":"..."},{"id":"h3dRMPVuULz2GrfyN0aY","op":"isValid","expect":{"reason":"column 1 has too much tokens","valid":false},"params":[{"grid":[["P1","P2","P1","P2","P1","P2","P1"],[],[],[],[],[],[]],"turn":"P1"}],"comment":"..."},{"op":"isValid","params":[{"grid":[[],["P1","P2","P1","P2","P1","P2","P1"],[],[],[],[],[]],"turn":"P2"}],"expect":{"reason":"column 2 has too much tokens","valid":false},"id":"4yhpznXYJeRRgX1rIrGV","comment":"..."},{"id":"sXGqxOCBPMS5L9Xgt7w7","expect":{"valid":false,"reason":"column 3 has too much tokens"},"comment":"...","op":"isValid","params":[{"grid":[[],[],["P1","P2","P1","P2","P1","P2","P1"],[],[],[],[]],"turn":"P2"}]},{"params":[{"grid":[[],[],[],[],["P1","P2","P1","P2","P1","P2","P1","P2"],[],[]],"turn":"P1"}],"comment":"...","expect":{"reason":"column 5 has too much tokens","valid":false},"op":"isValid","id":"at9dPTMOVjipjoW0g45G"},{"params":[{"grid":[[],[],[],[],[],["P1","P2","P1","P2","P1","P2","P1"],[]],"turn":"P1"}],"op":"isValid","comment":"...","expect":{"valid":false,"reason":"column 6 has too much tokens"},"id":"cgPtDLwVyOpHrXYf4lvO"},{"params":[{"grid":[[],[],[],[],[],[],["P1","P2","P1","P2","P1","P2","P1"]],"turn":"P1"}],"op":"isValid","comment":"...","expect":{"reason":"column 7 has too much tokens","valid":false},"id":"aG0PNcsSFooUMCGnJbKV"}]}],"canObserveString":"[]","canObserve":"[]","evals":[16,{"play":[0,0],"winner":[0,0],"isValid":[5,6]},{"isValid":[14,14],"play":[0,9],"winner":[0,7]}]}