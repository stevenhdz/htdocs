function TrieNode() {
    return {
        children: {},
        isEndOfWord: false
    };
}

function Trie() {
    const root = TrieNode();

    function insert(word) {
        let node = root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!node.children[char]) {
                node.children[char] = TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    function search(word) {
        let node = root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node !== null && node.isEndOfWord;
    }

    return { insert, search };
}

// Ejemplo de uso
const trie = Trie();
trie.insert("hello");
trie.insert("world");
console.log(trie.search("hello")); // Devuelve true
console.log(trie.search("world")); // Devuelve true
console.log(trie.search("hell")); // Devuelve false
console.log(trie.search("worlds")); // Devuelve false