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
  import { zod } from "sveltekit-superforms/adapters";
  import { fail } from "@sveltejs/kit";
  import { superValidate } from "sveltekit-superforms";

  export let data: SuperValidated<Infer<ContactFormSchema>>;

  const form = superForm(data, {
    SPA: true,
    validators: zod(contactFormSchema),
  });

  const { form: formData, enhance } = form;

  const handleSubmit = async (event: SubmitEvent) => {
    const formData = new FormData(event.target as HTMLFormElement);
    const form = await superValidate(formData, zod(contactFormSchema));
    if (!form.valid) {
      return fail(400, {
        form,
      });
    }
    const res = await fetch("https://formspree.io/f/mzbnyrew", {
      method: "POST",
      body: JSON.stringify(form),
    });

    console.log(res);

    return {
      form,
    };
  };
</script>

<Card.Root class="h-full w-full min-w-[300px] max-w-[600px] self-center">
  <Card.Content class="flex flex-col gap-8 overflow-hidden p-6">
    <form method="POST" use:enhance on:submit|preventDefault={handleSubmit}>
      <Form.Field {form} name="name">
        <Form.Control let:attrs>
          <Form.Label>Name</Form.Label>
          <Input {...attrs} bind:value={$formData.name} />
        </Form.Control>
        <Form.Description>This is your name.</Form.Description>
        <Form.FieldErrors />
      </Form.Field>
      <Form.Field {form} name="email">
        <Form.Control let:attrs>
          <Form.Label>Email</Form.Label>
          <Input {...attrs} bind:value={$formData.email} />
        </Form.Control>
        <Form.Description>This is your email address.</Form.Description>
        <Form.FieldErrors />
      </Form.Field>
      <Form.Field {form} name="subject">
        <Form.Control let:attrs>
          <Form.Label>Subject</Form.Label>
          <Input {...attrs} bind:value={$formData.subject} />
        </Form.Control>
        <Form.Description>This is the message subject.</Form.Description>
        <Form.FieldErrors />
      </Form.Field>
      <Form.Field {form} name="message">
        <Form.Control let:attrs>
          <Form.Label>Message</Form.Label>
          <Textarea {...attrs} bind:value={$formData.message} />
        </Form.Control>
        <Form.Description
          >This is the message (max 500 characters).</Form.Description>
        <Form.FieldErrors />
      </Form.Field>
      <Form.Button>Submit</Form.Button>
    </form>
  </Card.Content>
</Card.Root>
