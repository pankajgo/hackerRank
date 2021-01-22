function commonChild(s1, s2) {
    let g = [];
        s1 = ' ' + s1
        s2 = ' ' + s2
    
        for (let i = 0; i < s1.length; i++) {
            g.push(new Array(s2.length).fill(0))
        }
        
        for (let i = 1; i < s1.length; i++) {
            for (let j = 1; j < s2.length; j++) {
                if (s1[i] === s2[j]) g[i][j] = g[i - 1][j - 1] + 1;
                else g[i][j] = Math.max(g[i][j - 1], g[i - 1][j]);
            }
        }
        return g[s1.length - 1][s2.length - 1];
    }