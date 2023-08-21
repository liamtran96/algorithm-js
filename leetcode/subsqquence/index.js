function isSubsequence(s, t) {
    let sPointer = 0; // Pointer for string s
    let tPointer = 0; // Pointer for string t
    
    while (sPointer < s.length && tPointer < t.length) {
        if (s[sPointer] === t[tPointer]) {
            sPointer++; // Move sPointer if a match is found
        }
        console.log("sPointer",sPointer)
        tPointer++; // Always move tPointer

        console.log("tPointer",tPointer)

    }
    
    // If sPointer has reached the end of s, it means s is a subsequence of t
    return sPointer === s.length;
}

// Example usage
console.log(isSubsequence("ace", "abcde")); // Output: true
console.log(isSubsequence("aec", "abcde")); // Output: false
