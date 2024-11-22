'use client'

import { useForm, ValidationError } from '@formspree/react'
import { Mail, MapPin, PhoneIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export const ContactForm = () => {
  const [state, handleSubmit] = useForm('mvgognab')
  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }
  return (
    <div className="bg-primary text-secondary-foreground p-2 xl:flex xl:flex-row xl:h-[600px] relative border-8 border-accent">
      <div className="flex flex-col justify-between text-center p-8 lg:text-left xl:w-[40%]">
        <div>
          <h2 className="text-3xl font-semibold text-accent">Contact Form</h2>
          <p>Say something to start a live chat!</p>
        </div>
        <div className="space-y-6 mt-12">
          <span className="flex items-center">
            <PhoneIcon className="mr-2 text-accent" />
            +48 536 056 177
          </span>
          <span className="flex items-center mt-2">
            <Mail className="mr-2 text-accent" />
            talkthetalktutoringpl@gmail.com
          </span>
          <span className="flex items-center mt-2">
            <MapPin className="mr-2 text-accent" />
            132 Dartmouth Street Boston
          </span>
        </div>
        <div></div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mt-12 xl:w-[60%] px-4 space-y-12 relative"
      >
        <div className="xl:flex xl:justify-between gap-2 relative">
          <div className="xl:w-1/2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" type="text" name="fullName" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="xl:w-1/2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <Button type="submit" disabled={state.submitting} className="mt-6 ml-0">
          Send Message
        </Button>
      </form>
    </div>
  )
}
