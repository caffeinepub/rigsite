import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { BlogPost, ContactForm } from '../backend';

export function useGetBlogPosts(page: number = 0, pageSize: number = 10) {
  const { actor, isFetching } = useActor();

  return useQuery<BlogPost[]>({
    queryKey: ['blogPosts', page, pageSize],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getBlogPosts(BigInt(page), BigInt(pageSize));
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetBlogPostBySlug(slug: string) {
  const { actor, isFetching } = useActor();

  return useQuery<BlogPost | null>({
    queryKey: ['blogPost', slug],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getBlogPostBySlug(slug);
    },
    enabled: !!actor && !isFetching && !!slug,
  });
}

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (form: Omit<ContactForm, 'submittedAt'>) => {
      if (!actor) throw new Error('Actor not available');
      const contactForm: ContactForm = {
        ...form,
        submittedAt: BigInt(Date.now() * 1000000),
      };
      return actor.submitContactForm(contactForm);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactForms'] });
    },
  });
}
