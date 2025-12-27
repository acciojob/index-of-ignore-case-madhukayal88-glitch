function special(matrix, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // Check if the current cell is part of the 'X' diagonals
      if (i === j || (i + j) === (n - 1)) {
        
        // Diagonal elements (Primary or Secondary) must be non-zero
        if (matrix[i][j] === 0) {
          return false;
        }
        
      } else {
        
        // All other elements must be exactly zero
        if (matrix[i][j] !== 0) {
          return false;
        }
        
      }
    }
  }
  // If we reach here, all conditions were met
  return true;
}