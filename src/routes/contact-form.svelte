<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Form from "$lib/components/ui/form";
  import { Input } from "$lib/components/ui/input";
  import { Textarea } from "$lib/components/ui/textarea";
  import {
    contactFormSchema,
    type ContactFormSchema,
  } from "$lib/assets/ts/contactFormSchema";
  import {
    type SuperValidated,
    type Infer,
    superForm,
  } from "sveltekit-superforms";
  import { toast } from "svelte-sonner";
  import { zod4 } from "sveltekit-superforms/adapters";
  import { fail } from "@sveltejs/kit";

  interface Props {
    data: SuperValidated<Infer<ContactFormSchema>>;
  }

  let { data }: Props = $props();

  const form = superForm(data, {
    SPA: true,
    validators: zod4(contactFormSchema),
  });

  const { form: formData, enhance, validateForm } = form;

  const handleSubmit = async (
    event: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement },
  ) => {
    event.preventDefault();
    const form = await validateForm();

    if (!form.valid) {
      return fail(400, {
        form,
      });
    }

    try {
      const res = await fetch("https://formspree.io/f/mzbnyrew", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ ...form.data }),
      });

      console.log(res);

      if (res.ok) {
        toast.success("Message sent!");
      } else {
        const message = await res.text();
        toast.error("Failed!", {
          description: message,
        });
      }
    } catch (err) {
      console.log(err);
      toast.error("Error!", {
        description: err instanceof Error ? err.message : undefined,
      });
    }

    return {
      form,
    };
  };
</script>

<Card.Root class="h-full w-full max-w-150 min-w-75 self-center">
  <Card.Content class="flex flex-col gap-8 overflow-hidden p-6">
    <form method="POST" use:enhance onsubmit={handleSubmit}>
      <Form.Field {form} name="name">
        <Form.Control>
          {#snippet children(props)}
            <Form.Label>Name</Form.Label>
            <Input {...props} bind:value={$formData.name} />
          {/snippet}
        </Form.Control>
        <Form.Description>This is your name.</Form.Description>
        <Form.FieldErrors />
      </Form.Field>
      <Form.Field {form} name="email">
        <Form.Control>
          {#snippet children(props)}
            <Form.Label>Email</Form.Label>
            <Input {...props} bind:value={$formData.email} />
          {/snippet}
        </Form.Control>
        <Form.Description>This is your email address.</Form.Description>
        <Form.FieldErrors />
      </Form.Field>
      <Form.Field {form} name="subject">
        <Form.Control>
          {#snippet children(props)}
            <Form.Label>Subject</Form.Label>
            <Input {...props} bind:value={$formData.subject} />
          {/snippet}
        </Form.Control>
        <Form.Description>This is the message subject.</Form.Description>
        <Form.FieldErrors />
      </Form.Field>
      <Form.Field {form} name="message">
        <Form.Control>
          {#snippet children(props)}
            <Form.Label>Message</Form.Label>
            <Textarea {...props} bind:value={$formData.message} />
          {/snippet}
        </Form.Control>
        <Form.Description
          >This is the message (max 500 characters).</Form.Description>
        <Form.FieldErrors />
      </Form.Field>
      <Form.Button>Submit</Form.Button>
    </form>
  </Card.Content>
</Card.Root>
