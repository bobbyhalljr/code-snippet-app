import { supabase } from '../../../supabaseClient';

// read all code snippets
export async function getAllSnippets(){    
    let { data: code_snippets, error } = await supabase
    .from('code_snippets')
    .select('*')

    if(error) throw error;
    
    return code_snippets
}

// read all code snippets for a specific user
export async function getAllSnippetsForUser(userId: number){    
    let { data: code_snippets, error } = await supabase
    .from('code_snippets')
    .select('*')
    .eq('user_id', userId);

    if(error) throw error;
    
    return code_snippets
}

// paginate code snippets
export async function paginateCodeSnippets(){
let { data: code_snippets, error } = await supabase
    .from('code_snippets')
    .select('*')
    .range(0, 9)

    if (error) throw error;

    return code_snippets

}

// get code snippet details
export async function getCodeSnippetDetails() {
    let { data: code_snippets, error } = await supabase
      .from('code_snippets')
      .select(`
        id,
        title,
        content,
        language,
      ratings (
        code_snippet_id
      )
      comments (
        code_snippet_id
      )
    `);
  
    if (error) throw error;
  
    return code_snippets;
  }

// update code snippets
export async function UpdateSnippets(title: string, content: string, language :string, tags: string, description: string, visibility: string){

    const { data, error } = await supabase
    .from('code_snippets')
    .update({ 
        title: title,
        content: content,
        language: language,
        tags: tags,
        description: description,
        visibility: visibility
      })
    .eq('some_column', 'someValue')
    .select()

    if(error) throw error;

    return data

}

// insert code snippet 
export async function createSnippet(title: string, content: string, language :string, userId: number, tags: string, description: string, visibility: string){
    const { data, error } = await supabase
    .from('code_snippets')
    .insert(
        { 
            title: title,
            content: content,
            language: language,
            tags: tags,
            description: description,
            visibility: visibility
          },
    )
    .select()

    if (error) throw error;

    return data

}