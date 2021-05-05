export interface UpdateCommandAttributes {
    /**
     * Tags you can add to changesets to determine which changesets in the changelog to evaluate based on their labels
     */
    labels?: string;
    /**
     * Expressions you can add to changesets to determine which changesets in the changelog to evaluate based on their contexts
     */
    contexts?: string;
}
