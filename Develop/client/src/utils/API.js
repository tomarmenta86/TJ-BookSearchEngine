import { useMutation, useQuery } from '@apollo/client';
import * as queries from './queries'; 
import * as mutations from './mutations'; 

export function useGetMe() {
  const { loading, error, data } = useQuery(queries.GET_ME);

  return {
    loading,
    error,
    userData: data ? data.me : null,
  };
}

export function useCreateUser() {
  const [createUser] = useMutation(mutations.ADD_USER);

  return { createUser };
}

export function useLoginUser() {
  const [loginUser] = useMutation(mutations.LOGIN_USER);

  return { loginUser };
}

export function useSaveBook() {
  const [saveBook] = useMutation(mutations.SAVE_BOOK);

  return { saveBook };
}

export function useDeleteBook() {
  const [deleteBook] = useMutation(mutations.REMOVE_BOOK);

  return { deleteBook };
}
