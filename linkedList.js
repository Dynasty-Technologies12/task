function reverseBetween(head, left, right) {
    //This line creates a dummy node called 'before' with a 'next' property pointing to the 'head' of the linked list.
    // This dummy node is used to handle the case when 'left' is 1 because there's no previous node to 'head'.
    const before = {next: head};
    //Initialize a 'prev' pointer to the 'before' node, which will be used to keep track of the node before the 'left' position.
    let prev = before;
    //This is a while loop that decrements the 'left' variable and advances the 'prev' pointer until 'left' becomes 0. 
    //This effectively moves the 'prev' pointer to the node just before the 'left' position.
    while(--left) {
        prev = prev.next;
        --right;
    }
    //After exiting the previous loop, the 'prev' pointer is now at the node just before the 'left' position. 
    //'curr' is initialized to the node at the 'left' position.
    let curr = prev.next;
    //This is another while loop that decrements the 'right' variable and iterates until 'right' becomes 0. 
    //This loop is used to reverse the portion of the linked list between 'left' and 'right'.
    while(--right) {
        //Inside the second while loop, 'next' is set to the node following 'curr'
        let next = curr.next;
        //This line reassigns the 'next' pointer of 'curr' to skip the 'next' node, 
        //effectively removing 'next' from its current position in the list.
        curr.next = next.next;
        //This line updates the 'next' node's 'next' pointer to point to the node following
        //'prev', effectively inserting 'next' after 'prev'.
        next.next = prev.next;
        //Finally, this line updates the 'next' pointer of 'prev' to point to 'next', completing the insertion of 'next' into the list.
        prev.next = next;
    }
}