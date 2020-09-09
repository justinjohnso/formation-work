/* 
Your previous Python 3 content is preserved below:

# create empty dict 
# loop through words list 
# for each word, sort word 
# check if sorted_word in dict 
# if so, add word to values list 
# if not, add sorted_word to dict and 
# add list with word in it as value 
# return dict values in list form 

def group_anagrams(words):
    anagrams = {}
    for word in words: 
        sorted_word = ''.join(sorted(word))
        if sorted_word in anagrams: 
            anagrams[sorted_word].append(word)
        else: 
            anagrams[sorted_word] = [word]
    return list(anagrams.values())
words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]
print(group_anagrams(words))
        
 */

function groupAnagrams(words) {
    let hash = {} // hash of indexes
    let alpha = words.map((word) => word.split('').sort().join(''))
    
    for (let i in words) {
        if (hash[alpha[i]]) {
            hash[alpha[i]].push(words[i])
        } else {
            hash[alpha[i]] = [words[i]]
        }
    }
    
    return Object.values(hash)
}

const words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]
console.log(groupAnagrams(words))